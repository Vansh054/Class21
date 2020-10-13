function isTouching(m,o){
    if (m.x - o.x < o.width/2 + m.width/2
      && o.x - m.x < o.width/2 + m.width/2
      && m.y - o.y <  o.height/2 + m.height/2
      && o.y - m.y < o.height/2 + m.height/2) {
   return true;
  }
  else {
    return false;
  }
  }