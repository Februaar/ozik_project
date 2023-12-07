function PurchaseList() {
  return (
    <>
      <p className="my-nav-title">구매 내역</p>
      <p className="no-data">구매하신 상품이 없습니다.</p>
      <div className="my-purchased-container">
        <div className="my-purchsed-item"></div>
      </div>
    </>
  );
}

export default PurchaseList;
