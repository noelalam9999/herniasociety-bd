import React, { useContext, useEffect,useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import PageWrapper from "../../components/PageWrapper";
import { Select } from "../../components/Core";
import GlobalContext from "../../context/GlobalContext";
import { useAuth } from '../../../AuthUserContext';

import UniLogo from "../../sections/agents/UniLogo";
import ApplicationButton from "./ApplicationButtonPlain";


const feeRange = [
  { value: "200000", label: "<200,000" },
  { value: "150000", label: "<150,000" },
  { value: "100000", label: "<100,000" },
  { value: "50000", label: "<50,000" },
  { value: "20000", label: "<20,000" },
];

const Accomodationfee = [
  { value: "10000", label: "<10,000" },
  { value: "5000", label: "<5,000" },
  { value: "3000", label: "<3,000" },
  { value: "2000", label: "<2,000" },
  { value: "1000", label: "<1,000" },
];

const UniRows = ({user,onRowClick}) => {
 //console.log(user[0].StudyDestination)
  const [List, setList] = useState([]);
  const { authUser, loading,signOut } = useAuth();
  const [uniList, setUniList] = useState([]);
  const [uniApplicationList, setApplicationList] = useState([]);
  
  useEffect(() =>  {


      
    async function fetchMyAPI2() {
      try {
      
        const res = await fetch('https://ci-gsc.com/uni/');
        const todoList = await res.json();
        let filtered = todoList.filter(function(val, i, a) {return val.country==user[0].StudyDestination;});
        //filtered = filtered.filter(function(val, i, a) {return val.IELTSRequirement<=user[0].IELTSBand;});
        setUniList(filtered)
        onRowClick(filtered[0])
      } catch (e) {
        console.log(e);
    }
      }

      async function fetchMyAPI() {
        try {
       
          const res = await fetch('https://ci-gsc.com/application/');
      
          const todoList = await res.json();
          let filtered = todoList.filter(function(val, i, a) {return val.client_name==List[0].email;});
          console.log(filtered)
          setApplicationList(filtered)
          
        } catch (e) {
          console.log(e);
      }
        }


 fetchMyAPI2()
 fetchMyAPI()

  },user[0])


  const gContext = useContext(GlobalContext);
  return (
    <>
       { uniList.map((item, index)=>(
                        <tr onClick={()=> onRowClick(item)} className="border border-color-2">
                        <th scope="row" className="pl-6 border-0 py-7 pr-0">
               
                            <a  className="media min-width-px-235 align-items-center">
                              <UniLogo email ={item.email}/>
                              <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                {item.name}
                              </h4>
                            </a>
                         
                        </th>
                   
                        <td className="table-y-middle py-7 min-width-px-120 pr-0">
                        <Link href={`/university/`+item.id}>
                            <a  className="media min-width-px-170 align-items-center">
                        
                              <h4 className="font-size-4 mb-0 font-weight-semibold text-orange">
                               See details
                              </h4>
                            </a>
                          </Link>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">

<ApplicationButton Student={user[0].email} uni={item.id}/>
                        </td>
                      </tr>
                      
                      
                  )
                     )


                     } 
    </>
  );
};
export default UniRows;
