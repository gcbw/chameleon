export default {
  type: 'custom',
  data: `
    let handler = (e) => {
      let delay = CHAMELEON_SPOOF.get(window).kbDelay; 
      if (e.target && e.target.nodeName == 'INPUT') {
        if (Math.floor(Math.random() * 2)) {
          let endTime = Date.now() + (30 + Math.floor(Math.random() * (delay || 30) ));
          while(Date.now() < endTime) {};
        } 
      }
    }

    document.addEventListener('keypress', handler);
    document.addEventListener('keyup', handler);
    document.addEventListener('keydown', handler);`,
};
