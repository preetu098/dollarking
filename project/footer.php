
  <!-- component -->
  <div class="h-20 mx-auto">
    <!-- <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile-->
    <section id="bottom-navigation"
      class="block fixed inset-x-0 bottom-0 z-10 border-t-2 shadow md:w-96 lg:w-96 mx-auto sm:w-full bg-black">
      <div id="tabs" class="flex justify-between">
        <a href="index.html" class="w-full  justify-center inline-block text-center pt-2 pb-1">
          <i class="fa-solid fa-house text-2xl text-yellow-300"></i>
          <span class="tab tab-home block text-xs text-yellow-300">Game</span>
        </a>
        <a href="invit.html" class="w-full  justify-center inline-block text-center pt-2 pb-1">
          <i class="fa-solid fa-users text-2xl text-white"></i>
          <span class="tab tab-kategori block text-xs text-white">Invite</span>
        </a>
        <a href="withdraw.html" class="w-full  justify-center inline-block text-center pt-2 pb-1">
          <i class="fa-solid fa-arrow-right-arrow-left text-2xl text-white"></i>
          <span class="tab tab-explore block text-xs text-white">Withdraw</span>
        </a>
        <a href="myy.html" class="w-full  justify-center inline-block text-center pt-2 pb-1">
          <i class="fa-solid fa-user text-2xl text-white"></i>
          <span class="tab tab-whishlist block text-xs text-white">Profile</span>
        </a>
      </div>
    </section>
  </div>

  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <script>
    var swiper = new Swiper('.mySwiper', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  </script>
  <script>
    function openCity(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
  </script>
</body>

</html>