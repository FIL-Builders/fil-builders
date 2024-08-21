export default function BlueBox(props) {
  return (
    <svg
      {...props}
      width={props.width || "747"}
      height={props.height || "719"}
      viewBox="0 0 747 719"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <rect width="747" height="719" fill="url(#pattern0_1_6)" />
      <defs>
        <pattern
          id="pattern0_1_6"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_6"
            transform="scale(0.00133869 0.00139082)"
          />
        </pattern>
        <image
          id="image0_1_6"
          width="747"
          height="719"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}
