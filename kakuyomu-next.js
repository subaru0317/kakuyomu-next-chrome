// ==UserScript==
// @name         kakuyomu-next
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       mimimi
// @match        https://kakuyomu.jp/works/*/episodes/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  function createNextButton() {
    // 次へボタンのリンクを取得
    var nextButtonLink = document.getElementById('contentMain-readNextEpisode').href;

    // 次へボタンを作成
    var nextButton = document.createElement('a');
    nextButton.href = nextButtonLink;
    nextButton.textContent = '次へ';
    nextButton.style.float = 'right'; // 右寄せ
    nextButton.style.marginLeft = '10px'; // マージンを調整
    nextButton.style.backgroundColor = '#007bff';
    nextButton.style.color = '#ffffff';
    nextButton.style.padding = '10px';

    // widget-episodeTitle 要素を取得
    var episodeTitleElement = document.querySelector('.widget-episodeTitle.js-vertical-composition-item');

    // widget-episodeTitle の親要素に次へボタンを挿入
    episodeTitleElement.parentNode.insertBefore(nextButton, episodeTitleElement.nextSibling);
  }

  // ページが読み込まれたときに実行される
  window.addEventListener('load', function () {
    createNextButton(); // 次へボタンを作成
  });
})();

