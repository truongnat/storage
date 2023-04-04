import { IconProps, getIconProps } from "@/helpers/getIconProps";

export const SharedIcon = (props: IconProps) => {
  const { fill, className, height, width } = getIconProps(props);
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        d="M16.0013 12.0129C15.4107 12.0168 14.8282 12.1513 14.2959 12.4068C13.7635 12.6623 13.2944 13.0324 12.9223 13.4905L7.82395 11.1443C8.06366 10.4113 8.06366 9.62103 7.82395 8.88797L12.9223 6.54176C13.5237 7.26656 14.3622 7.75588 15.2897 7.92337C16.2172 8.09086 17.1741 7.92575 17.9916 7.45718C18.8091 6.98862 19.4345 6.24672 19.7576 5.36241C20.0807 4.47811 20.0806 3.50825 19.7574 2.624C19.4341 1.73976 18.8085 0.99797 17.991 0.529553C17.1734 0.0611355 16.2164 -0.103798 15.289 0.0638615C14.3615 0.231521 13.5231 0.720994 12.9218 1.4459C12.3205 2.1708 11.995 3.08453 12.0026 4.02583C12.0056 4.26368 12.029 4.50083 12.0726 4.73468L6.79429 7.16076C6.23155 6.61123 5.51895 6.23977 4.74576 6.09292C3.97257 5.94606 3.17319 6.03036 2.44775 6.33523C1.72232 6.6401 1.1031 7.15199 0.667681 7.80678C0.23226 8.46156 0 9.23011 0 10.0161C0 10.8022 0.23226 11.5707 0.667681 12.2255C1.1031 12.8803 1.72232 13.3922 2.44775 13.6971C3.17319 14.0019 3.97257 14.0862 4.74576 13.9394C5.51895 13.7925 6.23155 13.4211 6.79429 12.8715L12.0726 15.2976C12.029 15.5315 12.0056 15.7686 12.0026 16.0065C12.0026 16.7963 12.2371 17.5684 12.6765 18.2251C13.1159 18.8819 13.7404 19.3937 14.4711 19.696C15.2017 19.9983 16.0057 20.0774 16.7814 19.9233C17.5571 19.7692 18.2696 19.3888 18.8288 18.8303C19.388 18.2718 19.7689 17.5602 19.9232 16.7856C20.0775 16.0109 19.9983 15.2079 19.6956 14.4782C19.393 13.7485 18.8804 13.1248 18.2229 12.6859C17.5653 12.2471 16.7922 12.0129 16.0013 12.0129ZM16.0013 2.02906C16.3967 2.02906 16.7833 2.14617 17.1121 2.36558C17.4409 2.58498 17.6971 2.89684 17.8485 3.2617C17.9998 3.62656 18.0394 4.02805 17.9622 4.41538C17.8851 4.80272 17.6947 5.15851 17.4151 5.43776C17.1354 5.71701 16.7792 5.90719 16.3914 5.98423C16.0035 6.06128 15.6015 6.02174 15.2362 5.87061C14.8708 5.71948 14.5586 5.46354 14.3389 5.13518C14.1192 4.80681 14.0019 4.42075 14.0019 4.02583C14.0019 3.49625 14.2126 2.98837 14.5875 2.6139C14.9625 2.23943 15.471 2.02906 16.0013 2.02906ZM4.0052 12.0129C3.60976 12.0129 3.22321 11.8958 2.89442 11.6764C2.56563 11.457 2.30936 11.1451 2.15804 10.7803C2.00671 10.4154 1.96712 10.0139 2.04426 9.62659C2.12141 9.23926 2.31183 8.88347 2.59144 8.60421C2.87106 8.32496 3.22731 8.13479 3.61514 8.05774C4.00298 7.98069 4.40498 8.02024 4.77031 8.17137C5.13565 8.3225 5.4479 8.57843 5.66759 8.9068C5.88729 9.23516 6.00455 9.62122 6.00455 10.0161C6.00455 10.5457 5.7939 11.0536 5.41895 11.4281C5.044 11.8025 4.53546 12.0129 4.0052 12.0129ZM16.0013 18.0032C15.6059 18.0032 15.2193 17.8861 14.8905 17.6667C14.5617 17.4473 14.3055 17.1355 14.1541 16.7706C14.0028 16.4057 13.9632 16.0042 14.0404 15.6169C14.1175 15.2296 14.3079 14.8738 14.5875 14.5945C14.8672 14.3153 15.2234 14.1251 15.6112 14.0481C15.9991 13.971 16.4011 14.0105 16.7664 14.1617C17.1318 14.3128 17.444 14.5687 17.6637 14.8971C17.8834 15.2255 18.0006 15.6115 18.0006 16.0065C18.0006 16.536 17.79 17.0439 17.4151 17.4184C17.0401 17.7929 16.5316 18.0032 16.0013 18.0032Z"
        fill={fill}
      />
    </svg>
  );
};