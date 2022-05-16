<template>
  <div>
    <!-- ======= 페이지 제목 섹션 Start ======= -->
    <PageTitleView title="로그인"></PageTitleView>
    <!-- 페이지 제목 섹션 End -->

    <!-- ======= 로그인  섹션 Start ======= -->
    <section id="pages-details" class="pages-details">
      <div class="container">
        <div class="row gy-4 d-flex align-items-center justify-content-center">
          <div class="col-lg-8 col-xl-5 col-md-8">
            <div class="justify-content-center pages-details-info">
              <!-- id input -->
              <div class="form-outline mb-4">
                <input
                  type="text"
                  class="form-control"
                  id="id"
                  name="id"
                  v-model="id"
                />
                <label class="form-label" for="id">아이디</label>
              </div>

              <!-- pw input -->
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="pw"
                  class="form-control"
                  name="pw"
                  v-model="pw"
                />
                <label class="form-label" for="pw">비밀번호</label>
              </div>

              <!-- 아이디저장/비밀번호찾기 -->
              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                      checked
                    />
                    <label class="form-check-label" for="">아이디 저장</label>
                  </div>
                </div>
                <div class="col text-center">
                  <!-- 비밀번호 찾기 모달창 띄어서 하기 -->
                  <a href="#" data-toggle="modal" data-target="#findPwModal"
                    >비밀번호 찾기</a
                  >
                </div>
              </div>

              <!-- Submit button -->
              <div class="d-grid gap-2">
                <button
                  type="button"
                  @click="loginBtn"
                  class="btn btn-secondary btn-block"
                >
                  로그인
                </button>
                <button
                  type="button"
                  @click="joinBtn"
                  class="btn btn-warning btn-block"
                >
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 로그인  섹션 End -->

    <!-- 비밀번호 찾기 모달 -->
    <div class="modal" id="findPwModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">비밀번호 찾기</h5>
            <button
              class="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">x</span>
            </button>
          </div>
          <div class="modal-body">
            <form id="fForm" method="Post" action="#">
              <!-- id input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="fid"
                  >비밀번호를 찾고자 하는 <strong>아이디</strong>를 입력해
                  주세요.</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="fid"
                  name="fid"
                  required
                />
              </div>

              <!-- email input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="femail"
                  >회원정보에 등록한 <strong>이메일</strong>을 입력해
                  주세요.</label
                >
                <input
                  type="email"
                  id="femail"
                  class="form-control"
                  name="femail"
                  required="required"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button id="findPw" class="btn btn-warning" type="button">
              비밀번호 찾기
            </button>
            <button
              class="btn btn-secondary"
              type="button"
              data-dismiss="modal"
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 비밀번호 찾기 모달 End -->
  </div>
</template>

<script>
import PageTitleView from "@/components/common/PageTitleView.vue";

export default {
  name: "LoginView",
  components: {
    PageTitleView,
  },
  data() {
    return {
      id: "",
      pw: "",
    };
  },
  methods: {
    loginBtn() {
      alert(this.id);
      alert(this.pw);
    },
    joinBtn() {
      this.$router.push("/join");
    },
  },
};
</script>

<style></style>
