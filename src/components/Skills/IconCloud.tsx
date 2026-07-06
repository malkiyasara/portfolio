import { useEffect, useMemo, useState, memo } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

const cloudProps: any = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2.2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#ffffff",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

function IconCloud({ iconSlugs }: { iconSlugs: string[] }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    const grayScaleColors = ["#ffffff", "#ffffff", "#ffffff", "#ffffff"];

    return Object.values(data.simpleIcons).map((icon: any) => {
      const monochromeIcon = {
        ...icon,
        hex: grayScaleColors[
          Math.floor(Math.random() * grayScaleColors.length)
        ],
      };

      return renderSimpleIcon({
        icon: monochromeIcon,
        bgHex: "#080510",
        fallbackHex: "#ffffff",
        minContrastRatio: 1,
        size: 42,
        aProps: {
          href: undefined,
          target: undefined,
          rel: undefined,
          onClick: (e: any) => e.preventDefault(),
        },
      });
    });
  }, [data]);

  return (
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}

export default memo(IconCloud);
