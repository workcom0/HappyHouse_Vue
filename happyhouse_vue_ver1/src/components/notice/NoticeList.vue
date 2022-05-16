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
                  id="key"
                  name="key"
                  style="width: 100px; display: inline"
                >
                  <option value="all">전체</option>
                  <option value="subject">제목</option>
                  <option value="content">내용</option>
                </select>
                <input name="word" type="text" id="word" class="mx-1" />
                <button class="btn btn-secondary btn-xs">검색</button>
              </form>
            </div>

            <b-table
              hover
              :items="items"
              :per-page="perPage"
              :current-page="currentPage"
              @row-clicked="detail"
            >
            </b-table>

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
            <b-pagination
              align="center"
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>
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
import http from "@/api/http";

export default {
  name: "NoticeList",
  data() {
    return {
      fields: ["No", "제목", "작성자", "작성일자"],
      items: [],
      perPage: 10,
      currentPage: 1,
    };
  },
  created() {
    http
      .get("/notice")
      .then(({ data }) => {
        for (let i = 0; i < data.length; i++) {
          delete data[i].content;
        }
        this.items = data;
      })
      .catch(({ error }) => {
        alert("공지사항 목록 불러오기 에러 발생!! ", error);
      });
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  methods: {
    WriteBtn() {
      this.$router.push("/notice/write");
    },
    detail(item) {
      this.$router.push(`notice/detail?articleNo=${item.articleNo}`);
    },
  },
};
</script>

<style></style>
