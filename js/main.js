window.onload = function () {
  //01.gnb애니메이션
  const menuOpen = document.querySelector(".menuOpen");
  const menuBox = document.querySelector(".menuBox");

  menuOpen.addEventListener("click", () => {
    menuBox.classList.toggle("on");
  });

  gsap.registerPlugin(ScrollTrigger); //GSAP 라이브러리 스크롤트리거 등록

  //01 visual 로고 애니메이션
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".visual",
        start: "100% 100%", //visual영역의 100%와 브라우저 영역의 100%가 만나면 애니메이션 시작
        end: "100% 0%", //visual영역의 100%와 top의 0
        scrub: 1,
        //markers: true,
      },
    })
    .to(
      ".logoWrap #j",
      { x: -150, y: 250, rotate: 20, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #y",
      { x: -30, y: 150, rotate: -10, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #o",
      { x: 0, y: 400, rotate: -10, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #u",
      { x: 50, y: 300, rotate: 10, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #n",
      { x: 100, y: 100, rotate: -10, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #g",
      { x: 50, y: 450, rotate: 20, ease: "none", duration: 5 },
      0
    );

  //02 공통 .mainTextBox의 .title i
  gsap.utils.toArray(".mainTextBox .title i").forEach((selector) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: selector,
          start: "100% 100%",
          end: "100% 100%",
          scrub: 1,
        },
      })
      .fromTo(
        selector,
        { overflow: "hidden", y: 150 },
        { y: 0, ease: "none", duration: 5 },
        0
      );
  });

  //03 공통 .subText의 p
  gsap.utils.toArray(".subText p").forEach((selector) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: selector,
          start: "100% 100%",
          end: "100% 100%",
          scrub: 1,
        },
      })
      .fromTo(
        selector,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "none", duration: 5 },
        0
      );
  });

  //04 .con1의 textAni 텍스트 체인지 애니메이션
  let textAniList = document.querySelectorAll(".textAni li");
  let textAni = gsap.timeline({ repeat: -1 }); //무한 반복

  for (let i = 0; i < textAniList.length; i++) {
    textAni.to(textAniList[i], 0.8, {
      opacity: 1,
      repeat: 1,
      delay: 0,
      x: 0,
      yoyo: true,
      ease: "power4.out",
    });
  }
  textAni.play();

  //05 con4 listBox의 스크롤트리거 애니메이션
  gsap.utils.toArray(".con4 .listBox .box").forEach((selector) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: selector,
          start: "0% 20%",
          end: "0% 0%",
          scrub: 1,
        },
      })
      .to(selector, {
        transform: "rotateX(-10deg) scale(0.9)",
        transformOrigin: "top",
        filter: "brightness(0.3)",
        delay: 0,
      });
  });

  //06 .con3의 listBox 카드 애니메이션
  gsap.utils.toArray(".con3 .listBox li").forEach((selector, t) => {
    ScrollTrigger.create({
      trigger: selector,
      start: "30% 50%",
      onEnter: () => {
        gsap.set(selector, {
          rotationX: "-65deg",
          z: "-500px",
          opacity: 0,
        }),
          gsap.to(selector, {
            rotationX: 0,
            z: 0,
            opacity: 1,
            delay: (t % 3) * 0.05,
          });
      },
    });
  });

  //07 .con5의 listBox li 호버시 이미지 보이는 애니메이션
  let listBox = document.querySelectorAll(".con5 .listBox li");
  let imgBox = document.querySelector(".con5 .imgBox");
  let img = document.querySelector(".con5 .imgBox img");

  for (let i = 0; i < listBox.length; i++) {
    listBox[i].addEventListener("mouseover", () => {
      img.src = `images/img${i}.jpg`;
      gsap.set(imgBox, { scale: 0, opacity: 0, duration: 0.3 });
      gsap.to(imgBox, { scale: 1, opacity: 1, duration: 0.3 });
    });
    listBox[i].addEventListener("mousemove", (e) => {
      let imgBoxX = e.pageX + 20;
      let imgBoxY = e.pageY - 20;
      imgBox.style.left = imgBoxX + "px";
      imgBox.style.top = imgBoxY + "px";
    });
    listBox[i].addEventListener("mouseout", () => {
      gsap.to(imgBox, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
      });
    });
  }

  //08 footer영역
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "footer",
        start: "0% 100%",
        end: "100% 0%",
        scrub: 1,
        toggleClass: { targets: "footer .inner", className: "on" },
      },
    })
    .to(".logoWrap", { top: "20%", ease: "none", duration: 5 }, 0);

  //09 .loading
  let loading = document.querySelector(".loading");
  let rotate = document.querySelectorAll(".rotate");
  let opacity = document.querySelectorAll(".opacity");

  setTimeout(() => loading.classList.add("scene1"), 0),
    setTimeout(() => loading.classList.add("scene2"), 1500),
    setTimeout(() => loading.classList.remove("scene1", "scene2"), 2500),
    setTimeout(
      () =>
        rotate.forEach((rotate) => {
          rotate.classList.add("on");
        }),
      2500
    ),
    setTimeout(
      () =>
        opacity.forEach((opacity) => {
          opacity.classList.add("on");
        }),
      2500
    );
};
/*
 *scrub : ScrollTrigger이벤트에서 스크롤이 움직일때만 애니메이션이 재생되도록 만들어주는 속성.
          scrub을 적지 않으면 스크롤 하지 않아도 애니메이션이 재생됨.
          속성값으로는 true나 숫자(1,2,3)를 적을 수 있다.
          true: 스크롤이 움직일때마다 바로바로 반응하여 움직임
          숫자: 스크롤이 움직일때 그 시점을 따라잡는데 n초가 걸려 더 부드러운 효과를 줄 수 있다.

  *markers: 뷰포트와 해당 애니메이션을 적용할 영역을 화면에 나타내줌.
            scroller-end: 뷰포트의 top지점.
            scroller-start: 뷰포트의 bottom지점.
            start : 애니메이션이 시작되는 지점. scroller-start지점과 만나는 부분부터 애니메이션이 재생됨
            end : 애니메이션이 종료하는 지점. scroller-end지점과 만나면 애니메이션이 중단됨.
  
  *to("애니메이션을 적용할 요소",{x,y,rotate,ease,duration..}delay) 
  : 요소에 애니메이션 개별적용하는 함수. timeline에 있는 속성을 기준으로 해당 좌표만큼 이동한다.
    x: transform의 translateX와 같음.
    y: transform의 translateY와 같음.
    rotate: transform의 rotate와 같음.
    ease: 가속도. 움직임을 설정할 수 있다.
    duration: 애니메이션 진행시간
    ☆delay : 애니메이션 지연시간. 이 부분을 안적으면 to()함수가 순차적으로 진행된다.
 */
