import React, { useContext, useEffect,useState } from "react";
import Link from "next/link";
import PageWrapper from "../../../components/PageWrapper";
import Sidebar from "../../../components/Sidebar";
import { Select } from "../../../components/Core";
import { useAuth } from '../../../../AuthUserContext';
import imgF1 from "../../../assets/image/l1/png/Trent-University.jpg";
import iconF1 from "../../../assets/image/l1/png/accomodations.png";
import iconF2 from "../../../assets/image/l1/png/internship.png";
import iconF3 from "../../../assets/image/l1/png/offer-letter.png";
import iconF4 from "../../../assets/image/l1/png/post-study-work-visa.png";
import iconF5 from "../../../assets/image/l1/png/work-while-studying.png";
import Unilogo from "../../../sections/uni/Unilogo";
import { useRouter } from 'next/router';
const defaultCountries = [
  { value: "uk", label: "United Kingdom" },
  { value: "usa", label: "United States of America" },
  { value: "europe", label: "Europe" },
  { value: "canada", label: "Canada" },
  { value: "australia", label: "Australia" },
];

const SearchGrid = () => {
  const router = useRouter();
  const [userType, setUserType] = useState("");
 const { authUser, loading,signOut } = useAuth();
  const [List, setList] = useState([]);
  var [name,setName] =useState("");
  let [filtered, setfiltered] = useState([]);
  const [userList, setUserList] = useState([]);
  const [count, setCount] = useState(8);
  const [country,setCountry] =useState("");
  const [config,setConfig] = useState({
    Undergraduate: true,
    Diploma:true,
    Masters:true,
    PhD:true,
    threetofour:true,
    twotothree:true,
    onetotwo:true,
    zerotoone:true,
    feelower:'',
    feehigher:''
    
  })

  const onCountryChange = selectedOption => {
    setCountry(selectedOption);
  };

  const handleSubmit = () => {
    if (name=="")
    {
     name="all"
    }
    router.push('/search/'+country.value + '/' + name );
  }
  async function fetchMyAPI() {
    try {

      const res = await fetch('https://ci-gsc.com/uni/?format=json');
      
      let todoList = await res.json();
      
      let filtered = []
      let filtered_1 = []
      let filtered_2 = []
      let filtered_3 = []
      let filtered_4 = []
      let filtered_ranking = []
      todoList = todoList.filter(function(val, i, a) {return val.country=="USA";})
      if(config.Undergraduate == true){
          filtered = filtered.concat(todoList.filter(function(val, i, a) {return val.UGfee!=null;}))
      }
    
      if(config.Diploma ==true){
      filtered = filtered.concat(todoList.filter(function(val, i, a) {return val.Diplomafee!=null;}))
      }
      
      if(config.PhD ==true){
      filtered = filtered.concat(todoList.filter(function(val, i, a) {return val.PGfee!=null;}))
      }
      if(config.threetofour ==true){
    
       filtered_4 = filtered.filter(function(val, i, a) {return val.ranking<=4 && val.ranking>=3;})
      }
      if(config.twotothree ==true){
      
        filtered_3 = filtered.filter(function(val, i, a) {return val.ranking<=3 && val.ranking>=2;})
       }
       if(config.onetotwo ==true){
     
        filtered_2 = filtered.filter(function(val, i, a) {return val.ranking<=2 && val.ranking>=1;})
       }
       if(config.zerotoone ==true){
   
        filtered_1 = filtered.filter(function(val, i, a) {return val.ranking<=1 && val.ranking>-1;})
       }
       filtered_ranking = filtered_ranking.concat(filtered_1,filtered_2,filtered_3,filtered_4)
      const uniqueNames = filtered_ranking.filter((val,id,array) => array.indexOf(val) == id);

     
      setList(uniqueNames)






 
    } catch (e) {
      console.log(e);
  }
    }


  useEffect(() =>  {

 fetchMyAPI()

  },[config])



 const FeeRange = (e) => {
   console.log(e[0])
  setConfig( {
    ...config,
    "feelower": e[0],
    "feehigher":e[1]
  })


  }


  const handleDegreeCallback = (e) => {
   if (e=="3-4" || e=="2-3" || e=="1-2" || e=="1>" ){
    e = (e=="3-4") ? "threetofour" : (e=="2-3") ? "twotothree" : (e=="1-2") ? "onetotwo" : (e=="1>") ? "zerotoone" : "threetofour"

   }
  console.log(e)
   if(config[e]==true){
    setConfig( {
      ...config,
      [e]: false,
    })

   }
   else{
    setConfig( {
      ...config,
      [e]: true,
    })

   }
  }


  console.log(config)

function Loadmore (){

 setCount(count+8)
 
  }







  return (
    <>
      <PageWrapper>
        <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 col-xs-8">
                <Sidebar parentCallback = {handleDegreeCallback} FeeRange = {FeeRange} />
              </div>
              <div className="col-12 col-md-8 col-xs-12 ">
                {/* <!-- form --> */}
                <form
                  action="/"
                  className="search-form search-2-adjustment ml-lg-0 ml-md-15"
                >
                  <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
                    <div className="filter-inputs">
                      <div className="form-group position-relative w-lg-45 w-xl-40 w-xxl-45">
                      <input
                          className="form-control focus-reset pl-13"
                          type="text"
                          id="keyword"
                          placeholder="University of Regina"
                          onChange={(event) => setName(event.target.value)}
                          value={name}
                        />
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                        </span>
                      </div>
                      {/* <!-- .select-city starts --> */}
                      <div className="form-group position-relative w-lg-55 w-xl-60 w-xxl-55">
                      <Select
                          options={defaultCountries}
                          className="pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100"
                          border={false}
                          onChange={onCountryChange}
                          value={country}
                        />

                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-pin-3 text-primary font-weight-bold"></i>
                        </span>
                      </div>
                      {/* <!-- ./select-city ends --> */}
                    </div>
                    <div className="button-block">
                    <input
               
               type="button"
               value="Search"
               className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
               onClick={() => handleSubmit()}
          />
                    </div>
                  </div>
                </form>
                <div className="pt-12 ml-lg-0 ml-md-15">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="font-size-4 font-weight-normal text-default-color">
                      <span className="heading-default-color">{List.length}{" "}</span>
                      results for{" "}
                      <span className="heading-default-color">Institutes</span>
                    </h5>
                    <div className="d-flex align-items-center result-view-type">
                      <Link href="/search-list">
                        <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray">
                          <i className="fa fa-list-ul"></i>
                        </a>
                      </Link>
                      <Link href="/search-grid">
                        <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray active">
                          <i className="fa fa-th-large"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="row justify-content-center">


                    { List.slice(0,count).map((item, index)=>(
                            <div
                            className="col-12 col-lg-6 col-md-6 px-xxl-7"
                           
                          >
                            {/* <!-- Start Feature One --> */}
                            <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                              <div className="d-block mb-7">
                                <Link href="/#">
                              <Unilogo email={item.email}/>
                                </Link>
                              </div>
                              <Link href="/#">
                                <a className="font-size-3 d-block mb-0 text-gray">
                                
                                </a>
                              </Link>
                              <h2 className="mt-n4">
                              <Link href={"/university/"+item.id}>
                                  <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                                  {item.name}
                                  </a>
                                </Link>
                              </h2>
                              <ul className="list-unstyled mb-1 card-tag-list">
                                <li>
                                  <Link href="/#">
                                    <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                                      <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                                     {item.country}
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/#">
                                    <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                                      <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                                      Ranking : {item.ranking}
                                    </a>
                                  </Link>
                                </li>
                                {item.UGfee !=null && 
                                   <li>
                                   <Link href="/#">
                                     <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                       <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                                       Average UG Fee: {item.UGfee}
                                     </a>
                                   </Link>
                                 </li>
                                
                                }
                             {item.PGfee !=null && 
                                <li>
                                  <Link href="/#">
                                    <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                      <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                                      Average PG Fee: {item.PGfee}
                                    </a>
                                  </Link>
                                </li>
 
 }
 
 {item.Diplomafee !=null && 
                                <li>
                                  <Link href="/#">
                                    <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                      <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                                      Average Annual Diploma Fee: {item.Diplomafee}
                                    </a>
                                  </Link>
                                </li>
 
 }
 
 {item.Accomodation !=null && 
                                <li>
                                  <Link href="/#">
                                    <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                    <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                                    {" "} Accomodation
                                    </a>
                                  </Link>
                                </li>
 }
 {item.Internship !=null && 
                                <li>
                                  <Link href="/#">
                                    <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                    <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                                      Internship Opportunity
                                    </a>
                                  </Link>
                                </li>
                                }
                                {item.OfferLetter !=null && 
                                <li>
                                  <Link href="/#">
                                    <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                    <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                                    Offer Letter
                                    </a>
                                  </Link>
                                </li>
 }
 {item.OfferLetter !=null && 
                                <li>
                                  <Link href="/#">
                                    <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                    <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                                      Post-Study Work Visa
                                    </a>
                                  </Link>
                                </li>
                                }
                                    {item.OfferLetter !=null && 
                                <li>
                                  <Link href="/#">
                                    <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                    <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                                      Work White Studying
                                    </a>
                                  </Link>
                                </li>
 }
                              </ul>
                              <p className="mb-7 font-size-4 text-gray">
                              </p>
                              <div className="card-btn-group">
                                <Link href={'/university/'+item.id}>
                                  <a className="btn btn-green text-uppercase btn-medium rounded-3">
                                    Apply Now
                                  </a>
                                </Link>
                                <Link href="/#">
                                  <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                                    <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                                    Save it
                                  </a>
                                </Link>
                              </div>
                            </div>
                            {/* <!-- End Feature One --> */}
                          </div>
       
      )
      )


      } 


                   
                    </div>
                  </div>
                  <div className="text-center pt-5 pt-lg-13">
                  <button style={{border:"none",background:"none"}} onClick={Loadmore} >
                      <a className="text-green font-weight-bold text-uppercase font-size-3 d-flex align-items-center justify-content-center">
                        Load More{" "}
                        <i className="fas fa-sort-down ml-3 mt-n2 font-size-4"></i>
                      </a>
                   </button>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default SearchGrid;
