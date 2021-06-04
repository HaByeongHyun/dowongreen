jQuery(document).ready(function( $ ) {

    $(window).scroll(function(event){
      var t = $(window).scrollTop();
      if (t >= 10) {
        $("#site-header").addClass("sticky-header");
        } else {
        $("#site-header").removeClass("sticky-header");
      };
    });
  
    if (t >= 10) {
      $("#site-header").addClass("sticky-header");
    } else {
      $("#site-header").removeClass("sticky-header");
    };

/* HEADER CSS

.effect-two #site-navigation-wrap .dropdown-menu>li>a.menu-link>span {
	font-family: 'Noto Sans KR';
	font-weight: 400;
	font-size: 1.2em;
}
.dropdown-menu ul li a.menu-link {
	font-size: 0.9em;
}
#site-header.sticky-header {
	position: fixed;
	height: 60px;
	transition: all 0.3s;
}
#site-header.sticky-header #site-logo #site-logo-inner {
	height: 58px !important;
}
#site-header.sticky-header .dropdown-menu > li > a {
	line-height: 58px;
}
#site-header.sticky-header #site-navigation-wrap {
	height: 58px;
}
#site-header.sticky-header .hamburger {
	height: 58px !important;
}
#site-header.sticky-header .hamburger-inner {
    top: unset;
    margin-top: unset;
}
#site-header.sticky-header .hamburger-box {
    top: 10px;
}
@media screen and (max-width: 1080px) {
	#site-header.sticky-header {
		height: 40px;
	}
	#site-header.sticky-header #site-logo #site-logo-inner {
		height: 38px !important;
	}
	#site-header.sticky-header .dropdown-menu > li > a {
		line-height: 38px;
	}
	#site-header.sticky-header #site-navigation-wrap {
		height: 38px;
	}
	#site-header.sticky-header .hamburger {
		height: 38px !important;
	}
	#site-header.sticky-header .hamburger-inner {
			top: unset;
			margin-top: unset;
	}
	#site-header.sticky-header .hamburger-box {
			top: 0;
	}
}
*/

});