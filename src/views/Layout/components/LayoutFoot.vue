<script setup>
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-links">
        <a href="#about">关于我</a>
        <a href="#services">联系地址</a>
        <a href="#contact">API-one</a>
        <a href="#privacy">API-two</a>
      </div>
      <div class="social-media">
        <a href="#"><i class="iconfont icon-facebook"></i></a>
        <a href="#"><i class="iconfont icon-twitter"></i></a>
        <a href="#"><i class="iconfont icon-linkedin"></i></a>
      </div>
      <div class="copyright">
        <p>&copy; 2024 Author：Yuuki. 学习自用.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: #333;
  color: white;
  padding: 20px 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .footer-links {
      margin-bottom: 15px;

      a {
        color: white;
        text-decoration: none;
        margin: 0 15px;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .social-media {
      margin-bottom: 15px;

      a {
        color: white;
        margin: 0 10px;
        font-size: 20px;

        &:hover {
          color: #ccc;
        }
      }
    }

    .copyright {
      font-size: 14px;
      color: #bbb;
    }
  }
}
</style>
