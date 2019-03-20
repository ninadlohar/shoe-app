import React from "react";
import "../../global.scss";
import Slider from "react-slick";
class FirstRowCardScroll extends React.Component {
  render() {
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{
            ...style,
            display: "block",
            background: "#545454",
            color: "#545454"
          }}
          onClick={onClick}
        />
      );
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{
            ...style,
            display: "block",
            background: "#545454",
            color: "#545454"
          }}
          onClick={onClick}
        />
      );
    }
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1360,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 942,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // initialSlide: 2,
            dots: false
          }
        }
      ]
    };
    return (
      <div className="first-row-card-scroll-padding-l-r">
        <Slider {...settings}>
          <div className="shoe-card">
            <img
              src={require("../../../assets/black.png")}
              alt="black-nike-shoe"
            />
          </div>
          <div className="main-shoe-card">
            <div className="shoe-card">
              <div className="actual-img-shoe-card">
                <img
                  src={require("../../../assets/shoe.png")}
                  alt="nike-shoe"
                  className="shoe-card-img"
                />
                <div className="test2">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12 massive-padding">
                        <div className="row">
                          <div className="col-6 sh">ULTRA SHOE LTD</div>
                          <div className="col-6 sh1">EU/ UK/ US</div>
                        </div>
                        <div className="size-list">
                          <div className="s1">
                            <div className="pd8">36</div>
                            <div className="pd8">37</div>
                            <div className="pd8">38</div>
                            <div className="pd8">39</div>
                            <div className="pd8">40</div>
                          </div>
                          <div className="s2">
                            <div className="pd8">41</div>
                            <div className="pd8">42</div>
                            <div className="pd8">43</div>
                            <div className="pd8">44</div>
                            <div className="pd8">45</div>
                          </div>
                          <div className="s3">
                            <div className="pd8">46</div>
                            <div className="pd8">47</div>
                            <div className="pd8">48</div>
                            <div className="pd8">49</div>
                            <div className="pd8">50</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-shoe-card">
            <div className="shoe-card">
              <div className="actual-img-shoe-card">
                <img
                  src={require("../../../assets/shoe.png")}
                  alt="nike-shoe"
                  className="shoe-card-img"
                />
                <div className="test2">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12 massive-padding">
                        <div className="row">
                          <div className="col-6 sh">ULTRA SHOE LTD</div>
                          <div className="col-6 sh1">EU/ UK/ US</div>
                        </div>
                        <div className="size-list">
                          <div className="s1">
                            <div className="pd8">36</div>
                            <div className="pd8">37</div>
                            <div className="pd8">38</div>
                            <div className="pd8">39</div>
                            <div className="pd8">40</div>
                          </div>
                          <div className="s2">
                            <div className="pd8">41</div>
                            <div className="pd8">42</div>
                            <div className="pd8">43</div>
                            <div className="pd8">44</div>
                            <div className="pd8">45</div>
                          </div>
                          <div className="s3">
                            <div className="pd8">46</div>
                            <div className="pd8">47</div>
                            <div className="pd8">48</div>
                            <div className="pd8">49</div>
                            <div className="pd8">50</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-shoe-card">
            <div className="shoe-card">
              <div className="actual-img-shoe-card">
                <img
                  src={require("../../../assets/shoe.png")}
                  alt="nike-shoe"
                  className="shoe-card-img"
                />
                <div className="test2">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12 massive-padding">
                        <div className="row">
                          <div className="col-6 sh">ULTRA SHOE LTD</div>
                          <div className="col-6 sh1">EU/ UK/ US</div>
                        </div>
                        <div className="size-list">
                          <div className="s1">
                            <div className="pd8">36</div>
                            <div className="pd8">37</div>
                            <div className="pd8">38</div>
                            <div className="pd8">39</div>
                            <div className="pd8">40</div>
                          </div>
                          <div className="s2">
                            <div className="pd8">41</div>
                            <div className="pd8">42</div>
                            <div className="pd8">43</div>
                            <div className="pd8">44</div>
                            <div className="pd8">45</div>
                          </div>
                          <div className="s3">
                            <div className="pd8">46</div>
                            <div className="pd8">47</div>
                            <div className="pd8">48</div>
                            <div className="pd8">49</div>
                            <div className="pd8">50</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-shoe-card">
            <div className="shoe-card">
              <div className="actual-img-shoe-card">
                <img
                  src={require("../../../assets/shoe.png")}
                  alt="nike-shoe"
                  className="shoe-card-img"
                />
                <div className="test2">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12 massive-padding">
                        <div className="row">
                          <div className="col-6 sh">ULTRA SHOE LTD</div>
                          <div className="col-6 sh1">EU/ UK/ US</div>
                        </div>
                        <div className="size-list">
                          <div className="s1">
                            <div className="pd8">36</div>
                            <div className="pd8">37</div>
                            <div className="pd8">38</div>
                            <div className="pd8">39</div>
                            <div className="pd8">40</div>
                          </div>
                          <div className="s2">
                            <div className="pd8">41</div>
                            <div className="pd8">42</div>
                            <div className="pd8">43</div>
                            <div className="pd8">44</div>
                            <div className="pd8">45</div>
                          </div>
                          <div className="s3">
                            <div className="pd8">46</div>
                            <div className="pd8">47</div>
                            <div className="pd8">48</div>
                            <div className="pd8">49</div>
                            <div className="pd8">50</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-shoe-card">
            <div className="shoe-card">
              <div className="actual-img-shoe-card">
                <img
                  src={require("../../../assets/shoe.png")}
                  alt="nike-shoe"
                  className="shoe-card-img"
                />
                <div className="test2">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12 massive-padding">
                        <div className="row">
                          <div className="col-6 sh">ULTRA SHOE LTD</div>
                          <div className="col-6 sh1">EU/ UK/ US</div>
                        </div>
                        <div className="size-list">
                          <div className="s1">
                            <div className="pd8">36</div>
                            <div className="pd8">37</div>
                            <div className="pd8">38</div>
                            <div className="pd8">39</div>
                            <div className="pd8">40</div>
                          </div>
                          <div className="s2">
                            <div className="pd8">41</div>
                            <div className="pd8">42</div>
                            <div className="pd8">43</div>
                            <div className="pd8">44</div>
                            <div className="pd8">45</div>
                          </div>
                          <div className="s3">
                            <div className="pd8">46</div>
                            <div className="pd8">47</div>
                            <div className="pd8">48</div>
                            <div className="pd8">49</div>
                            <div className="pd8">50</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default FirstRowCardScroll;
