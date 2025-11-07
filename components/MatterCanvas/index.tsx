import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const MatterCanvas: React.FC = () => {
  const canvasWrapperRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const rectangles = useRef<Matter.Body[]>([]); // Store rectangles globally
  const imageSize = 50; // Fixed size for images
  const maxForce = 0.002; // Maximum force applied to images
  const sphereRef = useRef<Matter.Body | null>(null); // Ref for the sphere

  const init = () => {
    const canvasWrapper = canvasWrapperRef.current;
    if (!canvasWrapper) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const vmin = Math.min(width, height);

    if (engineRef.current) {
      Matter.World.clear(engineRef.current.world, false);
      Matter.Engine.clear(engineRef.current);
    }

    const engine = Matter.Engine.create();
    engineRef.current = engine;

    engine.world.gravity.y = 5.0;

    let canvas = canvasWrapper.querySelector("canvas");
    if (canvas) {
      canvas.remove();
    }

    const render = Matter.Render.create({
      element: canvasWrapper,
      engine: engine,
      options: {
        wireframes: false,
        background: "transparent",
        width: width,
        height: height,
      },
    });

    // Create static boundaries
    Matter.World.add(engine.world, [
      Matter.Bodies.rectangle(width / 2, height + 50, width, 100, {
        isStatic: true,
      }),
      Matter.Bodies.rectangle(width / 2, -50, width, 100, {
        isStatic: true,
      }),
      Matter.Bodies.rectangle(-50, height / 2, 100, height, {
        isStatic: true,
      }),
      Matter.Bodies.rectangle(width + 50, height / 2, 100, height, {
        isStatic: true,
      }),
      Matter.Bodies.rectangle(width / 2, height / 2, vmin * 1.3, vmin * 0.3, {
        isStatic: true,
        render: {
          fillStyle: "transparent",
        },
      }),
      Matter.Bodies.rectangle(
        width / 2,
        (height / 4.4) * 3,
        vmin * 0.18,
        vmin * 0.074,
        {
          isStatic: true,
          render: {
            fillStyle: "transparent",
          },
        }
      ),
    ]);

    // Add initial falling images
    const images: string[] = [];
    for (let i = 1; i <= 49; i++) {
      for (let j = 0; j < 5; j++) {
        images.push(`/images/hero-matter/${i}.png`);
      }
    }

    images.forEach((imageSrc) => {
      const rectangle = Matter.Bodies.rectangle(
        Math.random() * width,
        Math.random() * (height / 4),
        imageSize,
        imageSize,
        {
          render: {
            sprite: {
              texture: imageSrc,
              xScale: imageSize / 100,
              yScale: imageSize / 100,
            },
          },
        }
      );
      rectangles.current.push(rectangle);
      Matter.World.add(engine.world, rectangle);
    });

    // Create a transparent sphere
    const sphere: any = Matter.Bodies.circle(0, 0, imageSize / 10, {
      isStatic: true,
      render: {
        fillStyle: "rgba(0, 0, 0, 0)",
      },
    });
    sphereRef.current = sphere;
    Matter.World.add(engine.world, sphere);

    // Track mouse position and adjust sphere size
    const mouse = Matter.Mouse.create(render.canvas);
    let prevMousePosition = { x: mouse.position.x, y: mouse.position.y };

    Matter.Events.on(engine, "beforeUpdate", () => {
      const mousePosition = mouse.position;
      const dx = mousePosition.x - prevMousePosition.x;
      const dy = mousePosition.y - prevMousePosition.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (sphereRef.current) {
        Matter.Body.setPosition(sphereRef.current, mousePosition);
        const newSize = Math.max(
          imageSize,
          Math.min(imageSize * 2, imageSize + speed)
        );
        Matter.Body.scale(
          sphereRef.current,
          newSize / sphere.circleRadius,
          newSize / sphere.circleRadius
        );
      }

      prevMousePosition = { x: mousePosition.x, y: mousePosition.y };

      rectangles.current.forEach((rectangle) => {
        const rectDx = mousePosition.x - rectangle.position.x;
        const rectDy = mousePosition.y - rectangle.position.y;
        const distance = Math.sqrt(rectDx * rectDx + rectDy * rectDy);

        if (distance < (sphereRef.current?.circleRadius || 0)) {
          const forceMagnitude = ((maxForce * (150 - distance)) / 150) * speed;
          if (distance > 0) {
            const force = {
              x: (rectDx / distance) * forceMagnitude,
              y: (rectDy / distance) * forceMagnitude,
            };
            Matter.Body.applyForce(rectangle, rectangle.position, force);
          }
        }
      });
    });

    // Handle click event for adding/removing images
    const handleClick = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event;
      const canvasRect = render.canvas.getBoundingClientRect();
      const canvasX = x - canvasRect.left;
      const canvasY = y - canvasRect.top;

      for (let i = 0; i < 10; i++) {
        const imageIndex = Math.floor(Math.random() * images.length);
        const rectangle = Matter.Bodies.rectangle(
          canvasX,
          canvasY,
          imageSize,
          imageSize,
          {
            render: {
              sprite: {
                texture: images[imageIndex],
                xScale: imageSize / 100,
                yScale: imageSize / 100,
              },
            },
          }
        );
        rectangles.current.push(rectangle);
        Matter.World.add(engine.world, rectangle);
      }

      for (let i = 0; i < 10; i++) {
        const body = rectangles.current.shift();
        if (body) {
          Matter.World.remove(engine.world, body);
        }
      }
    };

    render.canvas.addEventListener("click", handleClick);

    Matter.Engine.run(engine);
    Matter.Render.run(render);

    return () => {
      render.canvas.removeEventListener("click", handleClick);
    };
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setTimeout(() => {
          init();
          window.addEventListener("resize", init);
        }, 40);
      }
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
      window.removeEventListener("resize", init);
      if (engineRef.current) {
        Matter.Engine.clear(engineRef.current);
      }
    };
  }, []);

  return <div className="canvas_wrapper" ref={canvasWrapperRef} />;
};

export default MatterCanvas;
