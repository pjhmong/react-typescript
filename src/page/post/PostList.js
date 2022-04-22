import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../../components/table/CommonTable';
import CommonTableColumn from '../../components/table/CommonTableColumn';
import CommonTableRow from '../../components/table/CommonTableRow';
import { postList } from '../../Data';
import axios from "axios";
import * as _ from 'lodash';


export const PostList = ({number}) => {
  const [ dataList, setDataList ] = useState({data: [], nowLoading: true, isLoaded: false});
  const getPostData = async () => {
      try {
          const res = await axios.get("https://asdfasdfasdfajkl");
          setDataList({data: _.get(res, "data"), nowLoading: false, isLoaded: true });
      } catch (e) {
          setDataList({data: [], nowLoading: false, isLoaded: false });
      }
  };
  useEffect(() => {
    getPostData();
  }, [number]);

  // useEffect(() => {
  //     console.log("Now Mount: ", number, " //  ", dataList)
  //     return () => console.log("now im unmount: ", number, " //  ", dataList);
  // }, []);
  // useEffect(() => {
  //     console.log("Now update: ", number, "  //  ", dataList)
  // });
 if (dataList.nowLoading) {
     return (
         <>
            loading Image
         </>
     );
 }

    const visualTags = (
        <>
            <CommonTable headersName={['ID', 'NAME', 'USER NAME', 'E-MAIL']}>
                {_.map(dataList.data, (data, idx) => {
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
                })}
            </CommonTable>
        </>
    );
    console.log(dataList.isLoaded);
    return dataList.isLoaded ? visualTags : (<>get data fail</>);
  // return (
  //   <>
  //   <CommonTable headersName={['ID', 'NAME', 'USER NAME', 'E-MAIL']}>
  //       {
  //         dataList.isLoaded ? _.map(dataList.data, (data, idx) => {
  //           const { id, name, username, email } = data;
  //           return (
  //             <CommonTableRow key={idx}>
  //               <CommonTableColumn>{ id }</CommonTableColumn>
  //               <CommonTableColumn>
  //                 <Link to={`/postView/id/${id}/name/${name}`}>{ name }</Link>
  //               </CommonTableColumn>
  //               <CommonTableColumn>{ username }</CommonTableColumn>
  //               <CommonTableColumn>{ email }</CommonTableColumn>
  //             </CommonTableRow>
  //           )
  //         }) : (<>get data fail</>)
  //       }
  //     </CommonTable>
  //   </>
  // )
}

// export default PostList;
