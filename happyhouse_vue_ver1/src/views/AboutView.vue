<template>
  <div>
    <!-- ======= 페이지 제목 섹션 Start ======= -->
    <PageTitleView title="About"></PageTitleView>
    <!-- 페이지 제목 섹션 End -->

    <!-- ======= 소개 Start ======= -->
    <section id="pages-details" class="pages-details">
      <div class="container">
        <div class="col-lg-12" align="center" style="margin: auto">
          <div class="card-body">
            <h1>AboutView 화면입니다.</h1>
          </div>
        </div>
      </div>
    </section>
    <!-- 소개 End -->
  </div>
</template>

<script>
import PageTitleView from "@/components/common/PageTitleView.vue";

export default {
  name: "AboutView",
  components: {
    PageTitleView,
  },
};
</script>

<style></style>
