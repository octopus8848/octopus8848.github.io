var posts=["2024/11/01/11-1今日美食/","2024/11/05/10-31今日美食/","2024/11/03/11-2/","2024/11/05/111/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };