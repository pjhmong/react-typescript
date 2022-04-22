import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../../components/table/CommonTable';
import CommonTableColumn from '../../components/table/CommonTableColumn';
import CommonTableRow from '../../components/table/CommonTableRow';
import { postList } from '../../Data';
import axios from "axios";
import * as _ from 'lodash';


const PostList = ({number}) => {
  const [ dataList, setDataList ] = useState([]);
  const getPostData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setDataList(_.get(res, "data"));
  };

  useEffect(() => {
    getPostData();
    // setDataList(postList);
  }, [number])

  return (
    <>
      <CommonTable headersName={['ID', 'NAME', 'USER NAME', 'E-MAIL']}>
        {
          dataList ? _.map(dataList, (data, idx) => {
            const { id, name, username, email } = data;
            return (
              <CommonTableRow key={idx}>
                <CommonTableColumn>{ id }</CommonTableColumn>
                <CommonTableColumn>
                  <Link to={`/postView/id/${id}/name/${name}`}>{ name }</Link>
                </CommonTableColumn>
                <CommonTableColumn>{ username }</CommonTableColumn>
                <CommonTableColumn>{ email }</CommonTableColumn>
              </CommonTableRow>
            )
          }) : ''
        }
      </CommonTable>
    </>
  )
}

export default PostList;
