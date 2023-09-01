$(function(){
        gsap.registerPlugin(ScrollTrigger);

        $(".elements_title").each(function() {
          ScrollTrigger.create({
          trigger: ".elements_content",
          toggleActions: "restart none reverse none",
          start: "top 85%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });
        $(".elements_banner").each(function() {
          ScrollTrigger.create({
          trigger: ".elements_content",
          toggleActions: "restart none reverse none",
          start: "top 90%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });
        $(".font_style_list").each(function() {
          ScrollTrigger.create({
          trigger: ".elements_content",
          toggleActions: "restart none reverse none",
          start: "top 85%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });
        
        $(".elements_font_color_list").each(function() {
          ScrollTrigger.create({
          trigger: ".elements_content",
          toggleActions: "restart none reverse none",
          start: "top 60%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });

        $(".tabs_icon_list").each(function() {
          ScrollTrigger.create({
          trigger: ".tabs_icon_list_wrap",
          toggleActions: "restart none reverse none",
          start: "top bottom",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });

        $(".step_list_box").each(function() {
          ScrollTrigger.create({
          trigger: ".step_list_wrap",
          toggleActions: "restart none reverse none",
          start: "top 95%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });

        $(".tabs_title").each(function() {
          ScrollTrigger.create({
          trigger: ".tabs",
          toggleActions: "restart none reverse none",
          start: "top 90%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });
        $(".tabs_banner").each(function() {
          ScrollTrigger.create({
          trigger: ".tabs",
          toggleActions: "restart none reverse none",
          start: "35% bottom",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });
        $(".tabs_describe").each(function() {
          ScrollTrigger.create({
          trigger: ".tabs",
          toggleActions: "restart none reverse none",
          start: "85% bottom",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });

        $(".preview_top .preview_list").each(function() {
          ScrollTrigger.create({
          trigger: ".preview_top",
          toggleActions: "restart none reverse none",
          start: "top 70%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });
        $(".preview_title").each(function() {
          ScrollTrigger.create({
          trigger: ".preview_top",
          toggleActions: "restart none reverse none",
          start: "10% bottom",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });
        $(".preview_bottom .preview_list").each(function() {
          ScrollTrigger.create({
          trigger: ".preview_bottom",
          toggleActions: "restart none reverse none",
          start: "10% bottom",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });

        $(".deep_face_list").each(function() {
          ScrollTrigger.create({
          trigger: ".technology",
          toggleActions: "restart none reverse none",
          start: "top bottom",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });

        $(".running_banner").each(function() {
          ScrollTrigger.create({
          trigger: ".technology_content",
          toggleActions: "restart none reverse none",
          start: "10% bottom",
          end: 'center top',
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });
        $(".guide_left").each(function() {
          ScrollTrigger.create({
          trigger: ".technology_content",
          toggleActions: "restart none reverse none",
          start: "60% 85%",
          end: 'bottom top',
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });
        $(".guide_right").each(function() {
          ScrollTrigger.create({
          trigger: ".technology_content",
          toggleActions: "restart none reverse none",
          start: "60% 55%",
          end: 'bottom top',
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });

        $(".connect_list_left .connect_list_inner:first-child .connect_list").each(function() {
          ScrollTrigger.create({
          trigger: ".point_section",
          toggleActions: "restart none reverse none",
          start: "37% 90%",
          end: 'bottom top',
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });
        $(".connect_list_left .connect_list_inner:last-child .connect_list").each(function() {
          ScrollTrigger.create({
          trigger: ".point_section",
          toggleActions: "restart none reverse none",
          start: "47% 90%",
          end: 'bottom top',
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });
        $(".connect_list_right .connect_list_inner:first-child .connect_list").each(function() {
          ScrollTrigger.create({
          trigger: ".point_section",
          toggleActions: "restart none reverse none",
          start: "47% 90%",
          end: 'bottom top',
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });
        $(".connect_list_right .connect_list_inner:last-child .connect_list").each(function() {
          ScrollTrigger.create({
          trigger: ".point_section",
          toggleActions: "restart none reverse none",
          start: "60% 90%",
          end: 'bottom top',
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
        });
})
        