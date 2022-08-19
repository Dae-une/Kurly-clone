import React from "react";
import Layouts from "../Common/Layout";
import styled from "styled-components";

const Detail = () => {
  return (
    <Layouts>
      <DetailWrap>
        <DetailImg />
        <DetailInfo>
          <ProductName>
            <h2>[Kurly's] 간편하게 바삭, 치즈 롤까스</h2>
            <button style={{ width: "40px", height: "40px" }}></button>
          </ProductName>
          <ProductDesc>한 입 가득 느껴지는 치즈의 맛</ProductDesc>
          <ProductPriceWrap>
            <span>8,900</span>
            <span> 원</span>
          </ProductPriceWrap>
          <ProductDelivery>
            <span>배송</span>
            <DeliveryInfo>
              <p>샛별배송/일반배송</p>
              <br />
              <p>
                23시 전 주문시 내일 아침 7시 전 도착
                <br />
                (대구·부산·울산 샛별배송 운영시간 별도 확인)
              </p>
            </DeliveryInfo>
          </ProductDelivery>
          <ProductCategoryWrap>
            <span>구분</span>
            <span>과일</span>
          </ProductCategoryWrap>
          <ProductUI>
            <ProductTotal>
              <span>총 상품금액: </span>
              <span> 8,900</span>
              <span>원</span>
            </ProductTotal>
            <ButtonWrap>
              <LikeButton>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K" />
                {/* <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBmaWxsPSIjRkY1QTVBIiBzdHJva2U9IiNGRjVBNUEiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K"/> */}
              </LikeButton>
              <BellButton>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
              </BellButton>
              <PutButton>장바구니 담기</PutButton>
            </ButtonWrap>
          </ProductUI>
        </DetailInfo>
      </DetailWrap>
    </Layouts>
  );
};

export default Detail;

const DetailWrap = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DetailImg = styled.div`
  width: 430px;
  height: 552px;
  background: url(https://img-cf.kurly.com/shop/data/goods/165606178688l0.jpg);
  background-size: cover;
`;

const DetailInfo = styled.div`
  border: 1px solid black;
  display: flex;
  width: 560px;
  flex-direction: column;
`;

const ProductName = styled.div`
  border: 1px solid greenyellow;
  display: flex;
  justify-content: space-between;

  h2 {
    &:first-child {
      font-size: 24px;
      margin: 4px 20px 0 0;
      font-weight: 500;
    }
  }

  button {
    &:last-child {
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBzdHJva2U9IiNEREQiIGN4PSIyMCIgY3k9IjIwIiByPSIxOS41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNSAxMSkiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjgiPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iOSIgcj0iMi4xIi8+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMTM3KSI+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSI4Ljg2MyIgY3k9IjMiIHI9IjIuMSIvPgogICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTAgOC4xMzYgNi4zNjMgNC41Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNS4xMzcgMTgpIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjguODYzIiBjeT0iMyIgcj0iMi4xIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNMCA4LjEzNiA2LjM2MyA0LjUiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==);
      border: none;
    }
  }
`;

const ProductDesc = styled.div`
  border: 1px solid greenyellow;
  color: rgb(181, 181, 181);
  font-size: 14px;
  line-height: 34px;
  letter-spacing: -0.5px;
  padding: 0px 0 8px 0;
`;

const ProductPriceWrap = styled.div`
  border: 1px solid greenyellow;
  margin: 15px 0;

  span {
    &:first-child {
      font-size: 28px;
      font-weight: bold;
    }

    &:last-child {
      font-size: 18px;
      font-weight: bold;
    }
  }
`;

//  배송구분div 스타일
const ProductDelivery = styled.div`
  border: 1px solid greenyellow;
  display: flex;
  flex-direction: row;
  margin: 15px 0 0 0;

  span {
    &:first-child {
      margin: 0 120px 0 0;
      color: #666666;
    }

    &:last-child {
      font-size: 12px;
      color: #666666;
    }
  }
`;
const DeliveryInfo = styled.div`
  border: 1px solid brown;

  p {
    &:first-child {
      font-size: 14px;
      color: #333333;
      font-weight: 600;
      margin: 0 0 -3px 0;
    }

    &:last-child {
      font-size: 12px;
      color: #666666;
    }
  }
`;

// 카테고리 div 스타일
const ProductCategoryWrap = styled.div`
  border: 1px solid greenyellow;
  margin: 10px 0;

  span {
    &:first-child {
      margin: 0 120px 0 0;
      color: #666666;
    }

    &:last-child {
      font-size: 14px;
      color: #666666;
      font-weight: 600;
    }
  }
`;

// 디테일 우측 하단 가격/버튼wrap
const ProductUI = styled.div`
  border: 1px solid blue;
  margin-top: 141px;
`;

const ProductTotal = styled.div`
  text-align: right;

  span {
    &:first-child {
      color: #333333;
      font-size: 13px;
    }

    &:nth-child(2) {
      font-size: 32px;
    }

    &:last-child {
      font-size: 20px;
    }
  }
`;

const ButtonWrap = styled.form`
  display: flex;
  margin-top: 47px;
`;

const LikeButton = styled.button`
  width: 56px;
  height: 56px;
  border: 1px solid rgb(221, 221, 221);
  background-color: #ffffff;
  border-radius: 3px;
  margin-right: 8px;
  img {
    padding: 0 10px;
  }
`;

const BellButton = styled.button`
  width: 56px;
  height: 56px;
  border: 1px solid rgb(221, 221, 221);
  background-color: #ffffff;
  border-radius: 3px;
  margin-right: 8px;
  img {
    padding: 0 10px;
  }
`;

const PutButton = styled.button`
  width: 100%;
  color: white;
  font-weight: bold;
  background-color: #5f0080;
  border: none;
  border-radius: 3px;
  font-size: 16px;
`;
