import React from "react";
import "./Home.css";
import Product from "./Product";
import Media from "./Media";
import SingleLineGridList from "./SingleLineGridList";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://qwintry.com/files/article/159/images/amazon-pic.png"
          alt=""
          className="home__image"
        />
        <div className="home__media">
          <Media
            img="https://d39w7f4ix9f5s9.cloudfront.net/dims4/default/bdc9ad9/2147483647/strip/true/crop/576x576+286+0/resize/800x800!/quality/90/?url=http%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fe0%2F05%2F189b25b4468bb07bd59bd5bba80e%2Famazon-projectkuiper-logo-white-promo.jpg"
            title="Amazon receives FCC approval for Project Kuiper satellite constellation"
            text="The authorization allows Project Kuiper to deliver satellite-based broadband services in the United States, helping expand internet access to households and communities across the country"
            link="https://blog.aboutamazon.com/company-news/amazon-receives-fcc-approval-for-project-kuiper-satellite-constellation"
          />
          <Media
            img="https://d39w7f4ix9f5s9.cloudfront.net/dims4/default/d3e689e/2147483647/strip/true/crop/1333x1333+300+0/resize/800x800!/quality/90/?url=http%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fb3%2Ffe%2Fe8ca87144d60a97b8d2f6ac42afb%2F20170505fulfillmentcenterkent-js-09uncropped.jpg"
            title="More than 100 million items delivered to healthcare and government organizations"
            text="Over 20,000 healthcare and government organizations have purchased PPE and other critical supplies through COVID-19 Supplies. Amazon does not make a profit from these sales, intended for those working on the front lines"
            link="https://blog.aboutamazon.com/company-news/over-100-million-items-delivered-to-healthcare-and-government-organizations"
          />
          <Media
            img="https://d39w7f4ix9f5s9.cloudfront.net/dims4/default/1570559/2147483647/strip/true/crop/474x474+0+0/resize/800x800!/quality/90/?url=http%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F58%2Fe5%2F4501be6b4829961d701cae8ed249%2Fblog-social-final-2.jpg"
            title="Amazon selects New York City and Northern Virginia for new headquarters"
            text="Amazon to invest $5 billion and create more than 50,000 jobs across the two new headquarters, and announces Nashville as new Operations Center of Excellence with more than 5,000 jobs."
            link="https://blog.aboutamazon.com/company-news/amazon-selects-new-york-city-and-northern-virginia-for-new-headquarters"
          />
        </div>
        <SingleLineGridList className="home__singleLineGrid" />
        <div className="home__row">
          <Product
            className="product__item"
            id="27516556"
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black
            by HP"
            image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US240_FMwebp_QL65_.jpg"
            price="119.99"
            stars={3}
          />
          <Product
            className="product__item"
            id="716516514"
            title='Lenovo IdeaPad 3 14" Laptop, 14.0" FHD (1920 x 1080) Display, AMD Ryzen 5 3500U Processor, 8GB DDR4 RAM, 256GB SSD, AMD Radeon Vega 8 Graphics, Narrow Bezel, Windows 10, 81W0003QUS, Abyss Blue'
            image="https://images-na.ssl-images-amazon.com/images/I/41hCoCHfdjL._AC_US240_FMwebp_QL65_.jpg"
            price="449.99"
            stars={4}
          />
        </div>
        <div className="home__row">
          <Product
            className="product__item"
            id="4765165161"
            title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Previous Model)"
            image="https://images-na.ssl-images-amazon.com/images/I/41h0H4SCgPL._AC_US240_FMwebp_QL65_.jpg"
            price="329.99"
            stars={5}
          />
          <Product
            className="product__item"
            id="4289284984"
            title="AmazonBasics 6-Outlet Surge Protector Power Strip, 6-Foot Long Cord, 790 Joule - Black"
            image="https://m.media-amazon.com/images/I/71rCo0i+qfL._AC_UY327_FMwebp_QL65_.jpg"
            price="11.81"
            stars={2}
          />
          <Product
            className="product__item"
            id="54441455"
            title="AMD Ryzen 9 3900X 12-core, 24-thread unlocked desktop processor with Wraith Prism LED Cooler"
            image="https://m.media-amazon.com/images/I/71S31CWSs3L._AC_UY327_FMwebp_QL65_.jpg"
            price="214.99"
            stars={4}
          />
        </div>
        <div className="home__row">
          <Product
            className="product__item"
            id="918981929"
            title="Sceptre IPS 24” Gaming Monitor 165Hz 144Hz Full HD (1920 x 1080) FreeSync Eye Care FPS RTS DisplayPort HDMI Build-in Speakers, Machine Black 2020 (E248B-FPT168)"
            image="https://m.media-amazon.com/images/I/71R1489K2AL._AC_UY327_FMwebp_QL65_.jpg"
            price="179.97"
            stars={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
