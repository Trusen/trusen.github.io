"use strict";var dark="inverted",localStore=window.localStorage,darkHeaderElements=function(){if($(".dream-header").length){var e=$(".dream-header .ui.segment"),a=$(".dream-header .ui.top.segment .ui.header"),t=$(".dream-header .ui.top.segment .ui.list"),r=$(".dream-header .ui.segment .ui.accordion");e.map(function(){$(this).toggleClass(dark)}),a.toggleClass(dark),t.toggleClass(dark),r.toggleClass(dark)}},darkBack=function(){var e=$(".dream-back .ui.segment");e.length&&e.map(function(){$(this).toggleClass(dark)})},darkPostsSection=function(){var e=$(".ui.segment.dream-posts-section");e.length&&e.toggleClass(dark)},darkTagsSection=function(){var e=$(".ui.segment.dream-tags-section");e.length&&e.toggleClass(dark)},darkCategoriesSection=function(){var e=$(".ui.segment.dream-categories-section");e.length&&e.toggleClass(dark)},darkSingle=function(){var e=$(".dream-single .ui.segment");e.length&&(e.map(function(){$(this).toggleClass(dark)}),$(".dream-single .ui.top.segment .ui.header").toggleClass(dark))},darkCards=function(){var e=$(".dream-card");e.length&&e.map(function(){$(this).toggleClass(dark)})},darkTables=function(){var e=$(".dream-single table");e.length&&e.map(function(){this.style.color?this.style.color="":this.style.color="black"})};function toggleDark(){darkHeaderElements(),darkCards(),darkSingle(),darkTables(),darkPostsSection(),darkTagsSection(),darkCategoriesSection(),darkBack()}var isDark=localStore.getItem("hugo-theme-dream-is-dark"),iconSwitchs=$(".theme-switch").toArray();isDark?(iconSwitchs.forEach(function(e){return $(e).addClass("moon")}),toggleDark()):iconSwitchs.forEach(function(e){return $(e).addClass("sun")});var themeSwitch=function(){isDark=isDark?(iconSwitchs.forEach(function(e){return $(e).removeClass("moon")}),iconSwitchs.forEach(function(e){return $(e).addClass("sun")}),localStore.removeItem("hugo-theme-dream-is-dark"),null):(iconSwitchs.forEach(function(e){return $(e).removeClass("sun")}),iconSwitchs.forEach(function(e){return $(e).addClass("moon")}),localStore.setItem("hugo-theme-dream-is-dark","y"),"y"),toggleDark()};