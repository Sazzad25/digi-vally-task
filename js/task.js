    //  console.clear();

      var wrap = gsap.utils.wrap(-100, 100);
      const boxes = gsap.utils.toArray(".box");
      const duration = 10;
      const gap = 0.5; // time between color change
      const step = duration / boxes.length - gap;
      const gapPosition = "+=" + gap;

      // initially position
      gsap.set(".box", {
        y: (i) => i * 50,
      });

      gsap.to(".box", {
        y: "-=200",
        duration: 10,
        ease: "none",
        modifiers: {
          y: gsap.utils.unitize(wrap), //force y value to wrap when it reaches -100
        },
        repeat: -1,
      });

      const tl = gsap.timeline({
        repeat: -1,
        defaults: {
          duration: step,
          ease: "none",
        },
      });
      boxes.forEach((box, i) => {
        if (boxes[i + 1]) {
          tl.to(box, { color: "#19191B" }, gapPosition).to(
            boxes[i + 1],
            { color: "#FBBD61" },
            "<"
          );
        } else {
          tl.to(box, { color: "#19191B" }, gapPosition).to(
            boxes[0],
            { color: "#FBBD61" },
            "<"
          );
        }
      });