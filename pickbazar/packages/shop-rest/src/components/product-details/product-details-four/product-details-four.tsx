import React, { useEffect, useContext, useState } from "react";
import Link from "next/link";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import { Button } from "components/button/button";
import {
  ProductDetailsWrapper,
  ProductPreview,
  ProductInfo,
  ProductTitlePriceWrapper,
  ProductTitle,
  ProductDescription,
  ProductDosage,
  ButtonText,
  ProductMeta,
  ProductCartWrapper,
  ProductPriceWrapper,
  ProductPrice,
  Subheading,
  SalePrice,
  ProductCartBtn,
  ImagePart,
  MetaTitle,
  MetaSingle,
  MetaItem,
  RelatedItems,
  ProductInfoWrapper,
  ProductDescriptionTabs,
  Tabs,
  Tab,
  TabsContent,
  TabContent,
  ProductDescriptionTabsWrapper,
  CallToActionWrapper,
  CallToAction,
  CallToActionList,
  CallToActionTitle,
  CallToActionListItem,
  CallToActionButton,
  InnerDiscountPercent,
} from "./product-details-four.style";
import { CartIcon } from "assets/icons/CartIcon";
import ReadMore from "components/truncate/truncate";
import CarouselWithCustomDots from "components/multi-carousel/multi-carousel";
import { CURRENCY } from "utils/constant";
import { FormattedMessage } from "react-intl";
import { useLocale } from "contexts/language/language.provider";
import { useCart } from "contexts/cart/use-cart";
import { Counter } from "components/counter/counter";
import { ProductGrid } from "components/product-grid/product-grid";
import axios from "axios";
import { Cookies } from "react-cookie";
import { BASKET_ADD_PRODUCT, PRODUCTS } from "endpoints";
import AuthenticationForm from "features/authentication-form";
import { openModal } from "@redq/reuse-modal";
import { AuthContext } from "contexts/auth/auth.context";
import { HorizontalCategoryCardMenu } from "layouts/horizontal-category-menu/horizontal-category-card-menu";

type ProductDetailsProps = {
  product: any;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const cookies = new Cookies();

const PAGE_TYPE = "grocery";

const ProductDetails: React.FunctionComponent<ProductDetailsProps> = ({
  product,
  deviceType,
}) => {
  const { isRtl } = useLocale();
  const [activeTab, setActiveTab] = useState("description");
  const { addItem, removeItem, isInCart, getItem } = useCart();
  const data = product;

  const {
    authState: { isAuthenticated },
    authDispatch,
  } = useContext<any>(AuthContext);

  const handleAddClick = (e) => {
    e.stopPropagation();
    addItem(data);
    // let product_url = `${PRODUCTS}${data.id}/`
    // let payload = { "url": product_url, "quantity": "1" }
    // if(!cookies.get('access_token')){
    //   console.log("No login found")
    // }
    // else{
    //   const config = {
    //     headers: { Authorization: `Bearer  ${cookies.get('access_token')}` }
    //   }
    //   axios.post(BASKET_ADD_PRODUCT, payload,config)
    //   .then(response => console.log(response));
    // }
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    removeItem(data);
  };

  const handleJoin = () => {
    authDispatch({
      type: "SIGNIN",
    });
    openModal({
      show: true,
      overlayClassName: "quick-view-overlay",
      closeOnClickOutside: false,
      component: AuthenticationForm,
      closeComponent: "",
      config: {
        enableResizing: false,
        disableDragging: true,
        className: "quick-view-modal",
        width: 458,
        height: "auto",
      },
    });
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);

  return (
    <>
      <ProductDetailsWrapper
        className="product-card"
        dir="ltr"
        style={{ marginTop: 15 }}
      >
        <ImagePart>
          <ProductPreview>
            <CarouselWithCustomDots
              items={product.gallery}
              deviceType={deviceType}
            />
          </ProductPreview>
        </ImagePart>
        <ProductInfoWrapper className="full">
          <ProductInfo dir={isRtl ? "rtl" : "ltr"}>
            <ProductDescription>
              <ProductTitle>{product.title}</ProductTitle>
              <ReadMore character={600}>{product.description}</ReadMore>
              <div style={{ margin: "10px 0 15px 0" }}>
                <ProductPrice
                  style={{ display: "inline-block", marginRight: 10 }}
                >
                  Weight/Quantity:
                </ProductPrice>
                <Subheading style={{ display: "inline-block" }}>
                  {product.weight}
                </Subheading>
              </div>
              <div style={{ margin: "15px 0" }}>
                <ProductPrice
                  style={{ display: "inline-block", marginRight: 10 }}
                >
                  Dosage :
                </ProductPrice>
                <Subheading style={{ display: "inline-block" }}>
                  {product.dosage}
                </Subheading>
              </div>
              <ProductPriceWrapper>
                <ProductPrice>
                  {CURRENCY}
                  {product.salePrice ? product.salePrice : product.price}
                </ProductPrice>

                {product.discountInPercent ? (
                  <React.Fragment>
                    <SalePrice>
                      {CURRENCY}
                      {product.price}
                    </SalePrice>
                    <InnerDiscountPercent>{`${product.discountInPercent}% off`}</InnerDiscountPercent>
                  </React.Fragment>
                ) : null}
              </ProductPriceWrapper>
              {/* TO BOTTOM TABS */}
              <MetaSingle>
                {product?.categories?.map((item: any) => (
                  <Link
                    href={`/${product.type}?category=${item.slug}`}
                    key={`link-${item.id}`}
                  >
                    <a>
                      <MetaItem>Tags: {item.title}</MetaItem>
                    </a>
                  </Link>
                ))}
              </MetaSingle>
            </ProductDescription>
            <ProductDescription
              style={{
                display: "flex",
              }}
            >
              <ProductCartBtn>
                {!isInCart(data.id) ? (
                  <>
                    {!isAuthenticated ? (
                      <Button
                        className="cart-button"
                        variant="primary"
                        size="big"
                        onClick={handleJoin}
                      >
                        <ButtonText>
                          <FormattedMessage
                            id="addToCartButton"
                            defaultMessage="Add to Cart"
                          />
                        </ButtonText>
                      </Button>
                    ) : (
                      <Button
                        className="cart-button"
                        variant="primary"
                        size="big"
                        onClick={handleAddClick}
                      >
                        {/* <CartIcon mr={2} /> */}
                        <ButtonText>
                          <FormattedMessage
                            id="addToCartButton"
                            defaultMessage="Add to Cart"
                          />
                        </ButtonText>
                      </Button>
                    )}
                  </>
                ) : (
                  <div>
                    <Counter
                      value={getItem(data.id).quantity}
                      url={getItem(data.id).url}
                      onDecrement={handleRemoveClick}
                      onIncrement={handleAddClick}
                      className="card-counter"
                      variant="altHorizontal"
                    />
                  </div>
                )}
              </ProductCartBtn>
            </ProductDescription>
          </ProductInfo>
        </ProductInfoWrapper>

        <CallToActionWrapper className="full">
          <CallToAction>
            <div>
              <CallToActionTitle>Don't have a Prescription?</CallToActionTitle>
              <CallToActionList>
                <CallToActionListItem>
                  Add medicines to your cart.
                </CallToActionListItem>
                <CallToActionListItem>
                  Select Free Doctor Consultation at checkout.
                </CallToActionListItem>
              </CallToActionList>
            </div>
            <CallToActionButton href="tel:+919992999929">
              Or Call on +91 99929 99929
            </CallToActionButton>
          </CallToAction>
        </CallToActionWrapper>

        {isRtl && (
          <ProductPreview>
            <CarouselWithCustomDots
              items={product.gallery}
              deviceType={deviceType}
            />
          </ProductPreview>
        )}
      </ProductDetailsWrapper>

      <ProductDescriptionTabsWrapper>
        <ProductDescriptionTabs>
          <Tabs>
            <Tab
              onClick={() => {
                setActiveTab("description");
              }}
              className={activeTab == "description" ? "active" : ""}
            >
              Description
            </Tab>
            <Tab
              onClick={() => {
                setActiveTab("reviews");
              }}
              className={activeTab == "reviews" ? "active" : ""}
            >
              Reviews
            </Tab>
          </Tabs>
          <TabsContent className="tab-content">
            {activeTab == "description" ? (
              <TabContent>
                <div>
                  <ProductPrice>Disclaimer</ProductPrice>
                  <ReadMore character={600}>{product.disclaimer}</ReadMore>
                </div>
              </TabContent>
            ) : (
              <TabContent className="tab-content"></TabContent>
            )}
          </TabsContent>
        </ProductDescriptionTabs>
      </ProductDescriptionTabsWrapper>

      <HorizontalCategoryCardMenu
        title="Related Items"
        type={PAGE_TYPE}
        url={"bestselled"}
      />

      {/* <RelatedItems>
        <h3>
          <FormattedMessage
            id="intlRelatedItems"
            defaultMessage="Related Items"
          />
        </h3>

        <ProductGrid
          type={product["categories"][0].name}
          loadMore={false}
          fetchLimit={5}
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        />
      </RelatedItems> */}
    </>
  );
};

export default ProductDetails;
