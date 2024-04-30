import { useEffect, useRef, useState } from "react";
import { Card } from "../../commonComponents/Card";
import { useWindowSize } from "../../utils/useWindowSize";

export const Interests = () => {
  const windowSize = useWindowSize();

  const refContainer = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    if (refContainer.current) {
      setDimensions({
        width: refContainer.current.offsetWidth,
        height: refContainer.current.offsetHeight,
      });
    }
  }, [windowSize]);

  return (
    <Card>
      <section>
        <h2 className="text-2xl pb-4">Interests</h2>
        <div
          className="grid grid-cols-2 gap-3"
          ref={(el) => (refContainer.current = el)}
        >
          <div>
            <h3 className="font-semibold col-span-1 h-12">
              Johann Hari on The Imperfects Podcast
            </h3>
            <div
              style={{
                width: dimensions.width / 2.05,
                height: (dimensions.width / 1.5) * 0.5,
              }}
            >
              <embed
                src="https://www.youtube.com/embed/5uA5TJhTO-8?si=2GyRgYpsl-LGr5_v"
                type="video/mp4"
                width="100%"
                height="100%"
                title="Johann Hari on The Imperfects Podcast"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold col-span-1 h-12 ">
              Generics in Typescript
            </h3>
            <div
              style={{
                width: dimensions.width / 2.05,
                height: (dimensions.width / 1.5) * 0.5,
              }}
            >
              <embed
                src="https://www.youtube.com/embed/EcCTIExsqmI?si=t1mIGnYotW4MJ7qR"
                type="video/mp4"
                width="100%"
                height="100%"
                title="Learn Generics in Typescript"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold col-span-1 h-12">Learn flute</h3>
            <div
              style={{
                width: dimensions.width / 2.05,
                height: (dimensions.width / 1.5) * 0.5,
              }}
            >
              <embed
                src="https://www.youtube.com/embed/XRELEGimLf4?si=1xWd0b3GvBRIe9Ia"
                type="video/mp4"
                width="100%"
                height="100%"
                title="Perfect sound with flute"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold col-span-1 h-12">
              Minimalism documentary
            </h3>
            <div
              style={{
                width: dimensions.width / 2.05,
                height: (dimensions.width / 1.5) * 0.5,
              }}
            >
              <embed
                src="https://www.youtube.com/embed/J8DGjUv-Vjc?si=py19GavIRtvyylXD"
                type="video/mp4"
                width="100%"
                height="100%"
                title="Minimalism - The documentary"
              />
            </div>
          </div>
        </div>
      </section>
    </Card>
  );
};
