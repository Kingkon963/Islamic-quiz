import {useRouter} from 'next/router'

export default function BackButton(){
    const router = useRouter();


    return(<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" onClick={() => router.back()}>
    <g id="Back_Icon" data-name="Back Icon" transform="translate(-330 -26)">
      <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(330 26)" fill="none" stroke="#2680eb" stroke-width="1">
        <circle cx="18" cy="18" r="18" stroke="none"/>
        <circle cx="18" cy="18" r="17.5" fill="none"/>
      </g>
      <path id="Path_8" data-name="Path 8" d="M339.818,44h20.275" fill="none" stroke="#e6e6e6" stroke-width="1"/>
      <path id="Path_9" data-name="Path 9" d="M348,35.326l-4.413,4.833-3.432,3.759" fill="none" stroke="#e6e6e6" stroke-width="1"/>
      <path id="Path_10" data-name="Path 10" d="M340.154,35.326l2.452,2.685L348,43.919" transform="translate(0 9)" fill="none" stroke="#e6e6e6" stroke-width="1"/>
    </g>
  </svg>
  );
}