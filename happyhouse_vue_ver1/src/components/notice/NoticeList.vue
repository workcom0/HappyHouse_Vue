<template>
  <!-- ======= 공지사항 list Start ======= -->
  <section id="pages-details" class="pages-details">
    <div class="container">
      <div class="col-lg-12" style="margin: auto">
        <div class="mt-2 mb-2">
          <div class="card-body">
            <div align="right">
              <form>
                <select
                  class="form-control mx-1"
                  id="skey"
                  name="key"
                  style="width: 100px; display: inline"
                >
                  <option value="all">전체</option>
                  <option value="subject">제목</option>
                  <option value="content">내용</option>
                </select>
                <input name="word" type="text" id="sword" class="mx-1" />
                <button class="btn btn-secondary btn-xs">검색</button>
              </form>
            </div>

            <b-table striped hover :items="items" :fields="fields"> </b-table>

            <div class="row mt-2 mx-1" style="width: 100px; float: right">
              <button
                type="button"
                @click="WriteBtn"
                class="btn btn-secondary btn-xs"
              >
                글쓰기
              </button>
            </div>
            <br />
          </div>
        </div>
        <div
          align="center"
          class="m-3 row justify-content-center"
          style="margin: auto"
        ></div>
      </div>
    </div>
  </section>
  <!-- 공지사항 list End -->
</template>

<script>
export default {
  name: "NoticeList",
  data() {
    return {
      fields: ["No", "제목", "작성자", "작성일자"],
      items: [],
    };
  },
  methods: {
    WriteBtn() {
      this.$router.push("/notice/write");
    },
  },
};
</script>

<style></style>
