import React from 'react';
import './SearchMain.css';
import area from "../img/cansearch.png";
import Jeonju from "../img/Jeonju.png";
import Busan from "../img/Busan.png";
import Suwon from "../img/Suwon.png";
import Jeju from "../img/Jeju.png";
import Gangneung from "../img/Gangneung.png";
import Daegu from "../img/Daegu.png";
import Pohang from "../img/Pohang.png";
import Incheon from "../img/Incheon.png";
import Map from "../img/Map.png";
import { Link } from 'react-router-dom';

function Search() {
  const onChange = (e) => {
    console.log(e.target.value);

  }
  return(
    <div className='Main_Search'>
      <div className='first_container'>
        <li id="title">Maplix</li>  
        <li>영화, 드라마, 예능을 보면서 가고 싶은 곳을 지금 바로 찾아보세요!</li>

        <div className='Search_Category'>
          <li><span>title</span></li>
          <li><span>area</span></li>
        </div>
  
        <input
          type="text" 
          onChange={onChange}
          placeholder="Search"
        />
      </div>    

      <div className='second_container'>
        everything you can search for
        <img src={area} alt = "cansearch" />
      </div>

      <div className='third_container'>
        <div style={{margin:'10px 0 10px 0', 'font-size':'18px'}}>Recommended Course</div>
      
        <div className = "third_list">
          <button className='third_img'>
            <img src={Jeonju} alt = "Jeonju" />
          </button>

          <button className='third_img'>
            <img src={Busan} alt = "Busan" />
          </button>

          <button className='third_img'>
            <img src={Suwon} alt = "Suwon" />
          </button>

          <button className='third_img'>
            <img src={Jeju} alt = "Jeju" />
          </button>

          <button className='third_img'>
            <img src={Gangneung} alt = "Gangneung" />
          </button>

          <button className='third_img'>
            <img src={Daegu} alt = "Daegu" />
          </button>

          <button className='third_img'>
            <img src={Pohang} alt = "Pohang" />
          </button>

          <button className='third_img'>
            <img src={Incheon} alt = "Incheon" />
          </button>
        </div>
      </div>

      <div className='fourth_container'>
        <img src={Map} alt = "Map" />
        <div className='fourth_item'>
          <div id="txt_course">Make your own course!</div>
          <div>
            가고싶은 관광지, 식당, 카페를 이용하여 나만의 코스를 만들어보세요!
            <br/>원하는 곳이 없다면 카테고리만 선택해보세요.
            <br/>AI가 코스를 추천해줍니다!
          </div>
          <button class="Make_btn">
            <Link to ="/course">
            Make now
            </Link>
          </button>
        </div>
      </div>
    </div>
    );
  };

export default Search;