<template>
  <!-- ======= 공지사항 write Start ======= -->
  <section id="pages-details" class="pages-details">
    <div class="container">
      <div class="col-lg-12" align="center" style="margin: auto">
        <h3>공지사항 등록</h3>
        <form id="form" method="post" action="">
          <div class="form-group mb-3 mt-3" align="left">
            <label for="subject"></label>
            <input
              type="text"
              class="form-control"
              id="subject"
              name="subject"
              placeholder="제목을 입력해 주세요."
              required="required"
            />
          </div>
          <div class="form-group mb-3" align="left">
            <label for="content"></label>
            <textarea
              class="form-control"
              rows="15"
              id="content"
              name="content"
              placeholder="내용을 입력해 주세요."
              required="required"
            ></textarea>
          </div>
          <div>
            <button type="button" id="cancelBtn" class="btn btn-secondary m-3">
              취소
            </button>
            <button type="button" id="registNoticeBtn" class="btn btn-warning">
              글작성
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <!-- 공지사항 write End -->
</template>

<script>
export default {};
</script>

<style></style>
