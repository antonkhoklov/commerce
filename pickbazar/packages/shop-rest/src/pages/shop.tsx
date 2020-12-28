import React, { useEffect, useState } from "react";
import { ProductGrid } from "components/product-grid/product-grid-three";
import { Modal } from "@redq/reuse-modal";
import dynamic from "next/dynamic";
import styled from "styled-components";
import css from "@styled-system/css";
import { HorizontalCategoryCardMenu } from "layouts/horizontal-category-menu/horizontal-category-card-menu";
import {
  MainContentArea,
  ContentSection,
  SidebarSection,
  OfferSection,
  MobileCarouselDropdown,
} from "assets/styles/pages.style";
import { siteOffers } from "site-settings/site-offers";
import Carousel from "components/carousel/carousel";
import { MobileBanner } from "components/banner/mobile-banner";
import { SEO } from "components/seo";
import { BANNERS } from "../endpoints";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useRefScroll } from "utils/use-ref-scroll";
import { useCart } from "contexts/cart/use-cart";
import { Cookies } from "react-cookie";
import axios from "axios";
import { PRODUCTS, BASKET_ADD_PRODUCT } from "endpoints";
import {
  FilterBar,
  FilterBarWrapper,
  FilterSectionTitle,
  FilterBarTitle,
  FilterSection,
  FilterSectionTitleSection,
  FilterBarBrandList,
  FilterBarCheckboxList,
  FilterSearchBar,
  SortMenu,
  SortOption,
} from "layouts/filter/filter-bar.styles";

const Sidebar = dynamic(() => import("layouts/sidebar/sidebar"));

const Banner = dynamic(() => import("components/banner/banner-two"), {
  ssr: false,
});

const CartPopUp = dynamic(() => import("features/carts/cart-popup"), {
  ssr: false,
});

const PAGE_TYPE = "grocery";

const fetcher = (args) => fetch(args).then((res) => res.json());
export default function GroceryTwoPage({ deviceType }) {
  const cookies = new Cookies();
  const { clearCart, items } = useCart();
  const router = useRouter();
  const { elRef: targetRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -110,
  });
  const [data, setData] = useState(null);
  let bannerurl = BANNERS;
  if (router.query && router.query.category) {
    bannerurl = bannerurl + "?category=" + router.query.category;
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(bannerurl);
      setData(result.data);
    };
    fetchData();
  }, [bannerurl]);
  if (cookies.get("status")) {
    clearCart();
    cookies.remove("status");
  } else {
    if (
      cookies.get("status") == "ACTIVE" ||
      cookies.get("status") == "PROCESSED"
    ) {
      const config = {
        headers: { Authorization: `Bearer  ${cookies.get("access_token")}` },
      };
      if (items.length > 0) {
        items.map((item) => {
          let cart_payload = {
            url: `${PRODUCTS}${item.id}/`,
            quantity: item.quantity,
          };
          axios
            .post(BASKET_ADD_PRODUCT, cart_payload, config)
            .then((response) => {});
        });
      }
      if (cookies.get("status")) {
        cookies.remove("status");
      }
    }
  }
  let bannerSlides = [];
  if (data && data.data) {
    bannerSlides = data.data;
  }
  let category = router.query.category;
  let searchName = router.query.text || router.query.category;
  if (
    router.query &&
    (router.query.text ||
      (router.query.category && category != "ayurveda" && category != "homeo"))
  ) {
    return (
      <>
        <SEO title="Medsmitra-Home" description="Medsmitra" />
        <Modal>
          <MobileCarouselDropdown>
            <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
          </MobileCarouselDropdown>
          <MainContentArea style={{ width: "100%", display: "flex" }}>
            <FilterBarWrapper>
              <FilterBar>
                <FilterSectionTitleSection>
                  <FilterBarTitle>Filter By</FilterBarTitle>
                </FilterSectionTitleSection>
                <FilterSection>
                  <FilterSectionTitle>Category</FilterSectionTitle>
                  <FilterBarBrandList>
                    <li>Arurveda</li>
                    <li>Homeopathy</li>
                  </FilterBarBrandList>
                </FilterSection>
                <FilterSection>
                  <FilterSectionTitle>Price</FilterSectionTitle>
                  <FilterBarCheckboxList>
                    <li>
                      <input type="checkbox" name="" id="" />
                      <span>Below 200</span>
                    </li>
                    <li>
                      <input type="checkbox" name="" id="" />
                      <span>201-500</span>
                    </li>
                    <li>
                      <input type="checkbox" name="" id="" />
                      <span>501-100</span>
                    </li>
                    <li>
                      <input type="checkbox" name="" id="" />
                      <span>Above 1000</span>
                    </li>
                  </FilterBarCheckboxList>
                </FilterSection>

                <FilterSection>
                  <FilterSectionTitle>Brand</FilterSectionTitle>
                  <FilterSearchBar placeholder="Search Brand"/>
                  <FilterBarCheckboxList>
                    <li>
                      <input type="checkbox" name="" id="" />
                      <span>Brand 1</span>
                    </li>
                    <li>
                      <input type="checkbox" name="" id="" />
                      <span>Brand 2</span>
                    </li>
                    <li>
                      <input type="checkbox" name="" id="" />
                      <span>Brand 3</span>
                    </li>
                    <li>
                      <input type="checkbox" name="" id="" />
                      <span>Brand 4</span>
                    </li>
                  </FilterBarCheckboxList>
                </FilterSection>

                <FilterSection>
                  <FilterSectionTitle>Health Condition</FilterSectionTitle>
                  <FilterSearchBar placeholder="Search Health Conidtion"/>
                  <FilterBarCheckboxList>
                    <li>
                      <input type="checkbox" name="" id="" />
                      <span>Condition 1</span>
                    </li>
                    <li>
                      <input type="checkbox" name="" id="" />
                      <span>Condition 2</span>
                    </li>
                    <li>
                      <input type="checkbox" name="" id="" />
                      <span>Condition 3</span>
                    </li>
                    <li>
                      <input type="checkbox" name="" id="" />
                      <span>Condition 4</span>
                    </li>
                  </FilterBarCheckboxList>
                </FilterSection>

              </FilterBar>
            </FilterBarWrapper>
            <ContentSection
              style={{ flex: 4, maxHeight: "100vh", overflowY: "scroll" }}
            >
              <div ref={targetRef} style={{ color: "green" }}>
                <h6 style={{ marginLeft: "30px", marginBottom: "25px" }}>
                  Relevant Results for {searchName}
                </h6>

                <SortMenu>
                  <FilterSectionTitle style={{marginTop: '5px'}}>Sort By:</FilterSectionTitle>
                  <SortOption className="active">Popularity</SortOption>
                  <SortOption>Name</SortOption>
                  <SortOption>Price Low to High</SortOption>
                  <SortOption>Price High to Low</SortOption>
                  <SortOption>Discount</SortOption>
                  <SortOption>New Arrivals</SortOption>
                </SortMenu>

                <ProductGrid type={PAGE_TYPE} />
              </div>
            </ContentSection>
          </MainContentArea>
          <CartPopUp deviceType={deviceType} />
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <SEO title="Medsmitra-Home" description="Medsmitra" />
        <Modal>
          <MobileBanner intlTitleId="medsmitra" type={PAGE_TYPE} />
          <Banner data={bannerSlides} deviceType={deviceType} />
          <HorizontalCategoryCardMenu
            type={PAGE_TYPE}
            url={"search by brand"}
          />
          <HorizontalCategoryCardMenu
            type={PAGE_TYPE}
            url={"search by health conditions"}
          />
          <HorizontalCategoryCardMenu type={PAGE_TYPE} url={"bestselled"} />
          <HorizontalCategoryCardMenu type={PAGE_TYPE} url={"bestoffers"} />
          <HorizontalCategoryCardMenu type={PAGE_TYPE} url={"discount"} />
          <OfferSection>
            <div style={{ margin: "0 -10px" }}>
              <Carousel deviceType={deviceType} data={siteOffers} />
            </div>
          </OfferSection>

          <MobileCarouselDropdown>
            <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
          </MobileCarouselDropdown>

          <MainContentArea>
            <ContentSection>
              <div ref={targetRef}>
                <ProductGrid type={PAGE_TYPE} />
              </div>
            </ContentSection>
          </MainContentArea>
          <CartPopUp deviceType={deviceType} />
        </Modal>
      </>
    );
  }
}

const ContentArea = styled.div<any>(
  css({
    overflow: "hidden",
    padding: ["68px 0 100px", "68px 0 50px", "110px 2rem 50px"],
    display: "grid",
    minHeight: "100vh",
    gridColumnGap: "30px",
    gridRowGap: ["15px", "20px", "0"],
    gridTemplateColumns: [
      "minmax(0, 1fr)",
      "minmax(0, 1fr)",
      "300px minmax(0, 1fr)",
    ],
    backgroundColor: "#f9f9f9",
  })
);
