<template>
  <!-- ======= Header Start======= -->
  <header id="header" class="fixed-top header-inner-pages">
    <div class="container d-flex align-items-center justify-content-lg-between">
      <h1 class="logo me-auto me-lg-0">
        <a href="/">Happy House<span>.</span></a>
      </h1>

      <!-- navBar Start -->
      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto" href="/">Home</a></li>
          <li><a class="nav-link scrollto" href="/about">소개</a></li>
          <li>
            <a class="nav-link scrollto" href="/notice">공지사항</a>
          </li>
          <li>
            <a class="nav-link scrollto" href="#aptdeal">거래가검색</a>
          </li>

          <li class="dropdown">
            <a href="#">
              <span>마이페이지</span>
              <i class="bi bi-chevron-down"></i>
            </a>
            <ul>
              <li><a href="#mypage">나의정보관리</a></li>
              <li><a href="#favoritearea">관심지역설정</a></li>
            </ul>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- navBar End -->

      <!-- 로그인/로그아웃 버튼 Start -->

      <a href="#login" class="get-started-btn scrollto">로그인</a>

      <a href="#logout" class="get-started-btn scrollto">로그아웃</a>

      <!-- 로그인/로그아웃 버튼 End -->
    </div>
  </header>
  <!-- Header End -->
</template>

<script>
export default {
  name: "HeaderView",
};
</script>

<style></style>
