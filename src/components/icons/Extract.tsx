export default function Extract({ className, width = 300, height = 300, mode }: { className?: string, width?: number, height?: number, mode: string }) {
    const fillColor = mode === 'dark' ? '#FFFFFF' : '#000000';
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 540" width={width} height={height}>
            <path d="M0 0 C2.30054749 -0.05744188 4.60027189 -0.09433683 6.90136719 -0.12109375 C7.61566895 -0.13422607 8.3299707 -0.1473584 9.06591797 -0.16088867 C12.73654602 -0.16660342 15.5955921 -0.08927667 18.65136719 2.06640625 C20.07178539 4.90724266 19.96588991 6.92117903 19.65136719 10.06640625 C17.51230545 12.89852909 16.3536913 13.95414062 12.81054688 14.52050781 C11.20808105 14.48908691 11.20808105 14.48908691 9.57324219 14.45703125 C8.41308594 14.44414063 7.25292969 14.43125 6.05761719 14.41796875 C4.85105469 14.38445312 3.64449219 14.3509375 2.40136719 14.31640625 C1.17933594 14.29835938 -0.04269531 14.2803125 -1.30175781 14.26171875 C-4.31817359 14.21458725 -7.33300773 14.14880038 -10.34863281 14.06640625 C-10.5227771 14.89628052 -10.5227771 14.89628052 -10.70043945 15.74291992 C-15.20116711 36.65545903 -15.20116711 36.65545903 -20.48535156 40.703125 C-22.97363281 41.56640625 -22.97363281 41.56640625 -25.83691406 42.23828125 C-30.46966226 43.3307647 -34.75091442 45.04446932 -39.16113281 46.81640625 C-40.02440186 47.15744385 -40.8876709 47.49848145 -41.77709961 47.84985352 C-48.39849235 50.52544687 -54.44053738 53.73707847 -60.50097656 57.5 C-63.35599272 59.0704547 -65.13188682 59.74063015 -68.34863281 60.06640625 C-71.11938477 59.26196289 -71.11938477 59.26196289 -74.08691406 57.9765625 C-75.15361328 57.52216797 -76.2203125 57.06777344 -77.31933594 56.59960938 C-78.42212891 56.11427734 -79.52492188 55.62894531 -80.66113281 55.12890625 C-81.78326172 54.64744141 -82.90539062 54.16597656 -84.06152344 53.66992188 C-86.82918882 52.48041463 -89.59100188 51.27895233 -92.34863281 50.06640625 C-92.56632324 50.61006836 -92.78401367 51.15373047 -93.00830078 51.71386719 C-94.79950059 54.85776543 -97.23139862 57.19588292 -99.79394531 59.70703125 C-100.3238205 60.23407654 -100.85369568 60.76112183 -101.39962769 61.30413818 C-103.08631107 62.979663 -104.77982845 64.64808347 -106.47363281 66.31640625 C-107.6212267 67.45396476 -108.76836743 68.59198061 -109.91503906 69.73046875 C-112.72101419 72.5144409 -115.53313745 75.29206385 -118.34863281 78.06640625 C-117.57883003 79.95721304 -116.8044961 81.84617538 -116.02832031 83.734375 C-115.5976123 84.7864917 -115.1669043 85.8386084 -114.72314453 86.92260742 C-113.09961654 90.63595911 -111.2078894 94.11923851 -109.16894531 97.6171875 C-107.61228368 102.26493436 -108.82846594 106.01846031 -110.95019531 110.29296875 C-111.61792969 111.41445312 -112.28566406 112.5359375 -112.97363281 113.69140625 C-117.41756057 121.50228177 -120.12293007 129.67211656 -122.80566406 138.21875 C-123.3180991 139.8352351 -123.83234741 141.45114679 -124.34863281 143.06640625 C-124.58759277 143.8258252 -124.82655273 144.58524414 -125.07275391 145.36767578 C-126.4972177 149.57200225 -127.62867486 151.69488625 -131.34863281 154.06640625 C-133.51513672 155.04956055 -133.51513672 155.04956055 -135.82519531 155.890625 C-137.07816406 156.34985352 -137.07816406 156.34985352 -138.35644531 156.81835938 C-139.22011719 157.12708984 -140.08378906 157.43582031 -140.97363281 157.75390625 C-141.84503906 158.07423828 -142.71644531 158.39457031 -143.61425781 158.72460938 C-150.06543385 161.06640625 -150.06543385 161.06640625 -152.34863281 161.06640625 C-152.28297119 161.60700684 -152.21730957 162.14760742 -152.1496582 162.70458984 C-151.26022753 170.68414696 -151.01974768 178.67221835 -150.78613281 186.69140625 C-150.74282655 188.09115557 -150.69920894 189.49089529 -150.65527344 190.890625 C-150.55000926 194.28247076 -150.44787272 197.67437979 -150.34863281 201.06640625 C-149.69789795 201.29303955 -149.04716309 201.51967285 -148.37670898 201.75317383 C-145.42665375 202.78620665 -142.48142779 203.83238265 -139.53613281 204.87890625 C-138.51197266 205.23533203 -137.4878125 205.59175781 -136.43261719 205.95898438 C-135.44970703 206.31025391 -134.46679688 206.66152344 -133.45410156 207.0234375 C-132.54813232 207.3428833 -131.64216309 207.6623291 -130.70874023 207.99145508 C-128.28814131 209.09395814 -126.98908939 209.9922621 -125.34863281 212.06640625 C-124.38487048 214.72989488 -123.53084714 217.35651352 -122.72363281 220.06640625 C-120.52020233 227.06183273 -117.87941523 233.69562931 -114.72363281 240.31640625 C-114.16554932 241.49396484 -114.16554932 241.49396484 -113.59619141 242.6953125 C-111.94003118 246.10327971 -110.32159849 249.10338103 -108.07519531 252.17578125 C-105.82533358 255.94251809 -105.74137618 257.71291202 -106.34863281 262.06640625 C-107.62645574 265.817833 -109.20755742 269.39896136 -110.84863281 273.00390625 C-111.49251953 274.45893555 -111.49251953 274.45893555 -112.14941406 275.94335938 C-113.20445669 278.32306665 -114.27101529 280.69685778 -115.34863281 283.06640625 C-114.71586426 283.65373535 -114.71586426 283.65373535 -114.0703125 284.25292969 C-104.99004599 292.69269992 -96.04044348 301.22643972 -87.34863281 310.06640625 C-84.22346734 308.587589 -81.09852871 307.10829303 -77.97363281 305.62890625 C-77.08417969 305.20802734 -76.19472656 304.78714844 -75.27832031 304.35351562 C-74.42753906 303.95068359 -73.57675781 303.54785156 -72.70019531 303.1328125 C-71.52191162 302.57509155 -71.52191162 302.57509155 -70.31982422 302.00610352 C-68.99000382 301.37215767 -67.66630034 300.72524001 -66.34863281 300.06640625 C-60.84196957 299.40949944 -57.37490937 301.41279949 -52.78613281 304.12890625 C-42.00829769 310.18858357 -30.37396546 314.01736733 -18.41894531 317.0703125 C-15.2870369 318.08638966 -14.38498107 318.61894288 -12.34863281 321.06640625 C-11.36547852 323.10351563 -11.36547852 323.10351563 -10.52441406 325.41015625 C-10.21826172 326.24417969 -9.91210938 327.07820313 -9.59667969 327.9375 C-9.28794922 328.80503906 -8.97921875 329.67257812 -8.66113281 330.56640625 C-8.34080078 331.43394531 -8.02046875 332.30148437 -7.69042969 333.1953125 C-5.34863281 339.65647488 -5.34863281 339.65647488 -5.34863281 343.06640625 C-4.73342773 343.04545898 -4.11822266 343.02451172 -3.484375 343.00292969 C-0.68929472 342.91963608 2.10552433 342.86770612 4.90136719 342.81640625 C5.86945313 342.78289062 6.83753906 342.749375 7.83496094 342.71484375 C15.00078727 342.61600477 15.00078727 342.61600477 18.29199219 344.89453125 C20.15590093 347.8725004 20.22631911 349.61669474 19.65136719 353.06640625 C17.47010645 355.94431366 16.28533015 356.95558819 12.69042969 357.58398438 C11.56378906 357.58849609 10.43714844 357.59300781 9.27636719 357.59765625 C8.04402344 357.6028125 6.81167969 357.60796875 5.54199219 357.61328125 C4.25808594 357.5978125 2.97417969 357.58234375 1.65136719 357.56640625 C0.36746094 357.581875 -0.91644531 357.59734375 -2.23925781 357.61328125 C-4.08777344 357.60554687 -4.08777344 357.60554687 -5.97363281 357.59765625 C-7.66359375 357.59088867 -7.66359375 357.59088867 -9.38769531 357.58398438 C-13.03752894 356.94598575 -14.12202644 355.98405 -16.34863281 353.06640625 C-17.53710937 350.71630859 -17.53710937 350.71630859 -18.48925781 348.15234375 C-19.01132812 346.76402344 -19.01132812 346.76402344 -19.54394531 345.34765625 C-19.89199219 344.38859375 -20.24003906 343.42953125 -20.59863281 342.44140625 C-20.96214844 341.47460938 -21.32566406 340.5078125 -21.70019531 339.51171875 C-24.34863281 332.38284187 -24.34863281 332.38284187 -24.34863281 330.06640625 C-24.88488281 329.99164063 -25.42113281 329.916875 -25.97363281 329.83984375 C-37.9533495 327.83008865 -49.26600914 323.01402555 -59.79785156 317.0703125 C-63.0117642 315.80541886 -64.08500131 315.93488931 -67.34863281 317.06640625 C-71.19192333 318.88133288 -74.92891588 320.8951852 -78.66699219 322.91601562 C-86.82447764 327.16883021 -86.82447764 327.16883021 -91.34863281 326.06640625 C-94.33983004 324.06350127 -96.80244548 321.59975836 -99.34863281 319.06640625 C-100.26402832 318.16519043 -101.17942383 317.26397461 -102.12255859 316.33544922 C-105.24068548 313.24654696 -108.32756618 310.12725473 -111.41113281 307.00390625 C-113.503151 304.88498931 -115.59828666 302.7692414 -117.69628906 300.65625 C-118.19270905 300.15298187 -118.68912903 299.64971375 -119.20059204 299.13119507 C-121.85102542 296.46873931 -124.55678901 294.04725272 -127.53222656 291.7578125 C-130.34863281 289.06640625 -130.34863281 289.06640625 -131.56738281 285.8203125 C-131.26011879 280.54744241 -129.22114269 276.66246427 -126.84863281 272.00390625 C-123.54214871 265.82591686 -123.54214871 265.82591686 -122.27050781 259.0703125 C-124.24014729 253.5824402 -126.89557737 248.4495762 -129.51977539 243.2512207 C-133.49276024 235.21696246 -133.49276024 235.21696246 -134.31347656 230.859375 C-135.13891678 226.74109757 -135.73527605 224.389231 -138.34863281 221.06640625 C-144.74519134 217.64687885 -151.84615361 215.83998128 -158.86254883 214.14624023 C-162.41096774 212.60497962 -163.49335558 211.52203914 -165.34863281 208.06640625 C-165.95155492 203.8562566 -165.93274629 199.68099176 -165.91503906 195.43359375 C-165.92123764 194.20480499 -165.92743622 192.97601624 -165.93382263 191.70999146 C-165.94091917 189.11607658 -165.93774981 186.52211614 -165.92504883 183.92822266 C-165.91115827 179.94869871 -165.9452917 175.97151377 -165.98339844 171.9921875 C-165.98434936 169.47265567 -165.98249229 166.95312089 -165.97753906 164.43359375 C-165.99079727 163.23983124 -166.00405548 162.04606873 -166.01771545 160.81613159 C-166.00518234 159.71133453 -165.99264923 158.60653748 -165.97973633 157.46826172 C-165.97877457 156.49517059 -165.97781281 155.52207947 -165.9768219 154.51950073 C-165.34863281 152.06640625 -165.34863281 152.06640625 -162.959198 150.27713013 C-160.45608933 149.11624226 -158.1537766 148.34294753 -155.47753906 147.69140625 C-145.56688 145.2244684 -145.56688 145.2244684 -137.88378906 139.04541016 C-135.75096099 134.36425495 -134.81553506 129.42385743 -133.87011719 124.39160156 C-132.41659677 117.91064253 -128.95878127 111.73135912 -125.54785156 106.0859375 C-124.06582357 103.14398133 -124.06582357 103.14398133 -124.90332031 100.1875 C-126.96980104 95.72501865 -129.23299309 91.38480996 -131.60253906 87.07617188 C-133.9431542 82.60499681 -135.34687947 79.20106576 -134.34863281 74.06640625 C-132.42925764 71.00431704 -129.90524834 68.60315963 -127.34863281 66.06640625 C-126.29627842 64.99748907 -125.24492373 63.92758713 -124.19433594 62.85693359 C-120.52112354 59.13028726 -116.81108691 55.4413908 -113.09863281 51.75390625 C-111.80673212 50.46703177 -110.5150636 49.17992417 -109.22363281 47.89257812 C-106.86666263 45.54372528 -104.50842427 43.1961637 -102.1484375 40.8503418 C-100.69788927 39.4080152 -99.25212472 37.95709803 -97.89825439 36.42366028 C-95.66002188 34.46327838 -93.49766658 34.53929735 -90.61425781 34.64453125 C-87.13585811 35.29223326 -84.4059463 36.94835351 -81.34936523 38.67626953 C-74.20248773 42.80846728 -74.20248773 42.80846728 -66.23681641 43.85253906 C-62.70407233 42.66220626 -59.79203942 40.72265173 -56.70410156 38.671875 C-53.3999852 36.49925152 -50.3358669 35.35088425 -46.52441406 34.3046875 C-35.69660536 31.56780523 -35.69660536 31.56780523 -27.59277344 24.46630859 C-24.89776509 18.66291792 -23.27674938 12.64433947 -22.05859375 6.37548828 C-21.25995512 3.77799028 -20.50949527 2.68981676 -18.34863281 1.06640625 C-15.15332031 0.5546875 -15.15332031 0.5546875 -11.22363281 0.37890625 C-10.52657227 0.34692139 -9.82951172 0.31493652 -9.11132812 0.28198242 C-6.07496589 0.15653806 -3.0376689 0.08588835 0 0 Z " fill={fillColor} transform="translate(165.3486328125,77.93359375)" />
            <path d="M0 0 C6.34733242 5.9882914 10.27755647 12.9260133 11.0234375 21.703125 C11.25620426 32.64316291 10.19226471 40.68567107 3.1875 49.5 C-4.13556326 57.13439497 -12.79261579 60.53549452 -23.28125 60.84765625 C-32.7378359 60.5429982 -40.29814149 57.29545857 -47.359375 50.89453125 C-52.00682281 45.91937879 -56.3125 39.76294837 -56.3125 32.75 C-140.1325 32.75 -223.9525 32.75 -310.3125 32.75 C-310.3125 28.46 -310.3125 24.17 -310.3125 19.75 C-226.4925 19.75 -142.6725 19.75 -56.3125 19.75 C-55.9825 17.77 -55.6525 15.79 -55.3125 13.75 C-51.30414551 4.77627905 -45.26981626 -1.80660878 -36.1875 -5.625 C-23.64757912 -10.05868978 -10.47095153 -8.58853328 0 0 Z M-38.1875 12.625 C-42.2964292 17.78222093 -43.80749958 21.81310293 -43.62109375 28.4140625 C-42.7470152 35.03050519 -39.18453558 39.54468412 -34.03125 43.5625 C-29.39703049 46.76432439 -24.8807912 47.5468932 -19.3125 46.75 C-13.06122533 44.91323148 -8.93943307 42.29707411 -5.3125 36.75 C-2.24196764 31.0767117 -1.55547177 25.99236117 -3.3125 19.75 C-6.00196124 13.33222982 -10.12851166 9.76437088 -16.3125 6.75 C-24.7659572 3.93218093 -32.33834579 6.1933574 -38.1875 12.625 Z " fill={fillColor} transform="translate(501.3125,230.25)" />
            <path d="M0 0 C8.29392978 5.87486692 13.60136984 12.66147514 15.8125 22.7109375 C16.89922078 33.19003071 16.11961417 41.7458914 9.89453125 50.3671875 C4.25367743 57.15617971 -2.37227562 62.055039 -11.1875 63.7109375 C-22.95930983 64.61532087 -32.05082949 62.91483058 -41.3671875 55.484375 C-45.89486186 51.07329311 -49.12249819 45.66470441 -51.1875 39.7109375 C-51.1875 38.7209375 -51.1875 37.7309375 -51.1875 36.7109375 C-58.61188833 36.74912055 -66.03578958 36.80866345 -73.45978546 36.89484024 C-76.90777886 36.93420653 -80.35552104 36.9664474 -83.80371094 36.98193359 C-87.77571815 37.00009412 -91.74702946 37.05009325 -95.71875 37.1015625 C-96.94613892 37.10279114 -98.17352783 37.10401978 -99.43811035 37.10528564 C-107.47074893 37.24176048 -112.70980404 38.31376663 -119.2109375 43.24609375 C-123.65956375 48.27329856 -124.38586427 53.18075879 -125.1875 59.7109375 C-126.83657525 71.08445652 -131.16502916 79.36667947 -140.1875 86.7109375 C-146.28674458 90.54095316 -151.50717231 91.83819003 -158.70019531 91.82446289 C-159.66667496 91.82468193 -159.66667496 91.82468193 -160.65267944 91.8249054 C-162.77369603 91.824211 -164.89462383 91.81644086 -167.015625 91.80859375 C-168.48964388 91.80672789 -169.96366338 91.80530478 -171.43768311 91.80430603 C-175.31088992 91.80049411 -179.18405903 91.79067515 -183.05725098 91.77960205 C-187.01212046 91.76935943 -190.96699606 91.7648023 -194.921875 91.75976562 C-202.67710248 91.74905167 -210.43229115 91.73146562 -218.1875 91.7109375 C-218.1875 87.4209375 -218.1875 83.1309375 -218.1875 78.7109375 C-215.53182983 78.68906372 -215.53182983 78.68906372 -212.82250977 78.66674805 C-206.94308821 78.61489702 -201.06389766 78.54955831 -195.18472385 78.47522259 C-191.6235796 78.4306813 -188.06254546 78.39139072 -184.5012207 78.36450195 C-180.39766331 78.33328095 -176.29470301 78.27849972 -172.19140625 78.22265625 C-170.92543106 78.21626633 -169.65945587 78.2098764 -168.3551178 78.20329285 C-159.77546245 78.06183694 -152.74081222 76.85975312 -145.1875 72.7109375 C-144.01092532 71.03074696 -144.01092532 71.03074696 -143.1875 68.7109375 C-142.6925 67.5971875 -142.1975 66.4834375 -141.6875 65.3359375 C-140.25454982 61.53365386 -139.77672403 57.86505176 -139.3125 53.8359375 C-137.89367582 43.12610338 -133.64994779 35.49345595 -125.1875 28.7109375 C-115.99435277 22.71307834 -106.38571112 22.42591386 -95.71875 22.515625 C-94.44269897 22.5184549 -93.16664795 22.52128479 -91.85192871 22.52420044 C-88.48502941 22.53345753 -85.11840918 22.55137788 -81.75158691 22.5736084 C-78.30576976 22.59419078 -74.85992361 22.60322846 -71.4140625 22.61328125 C-64.67179888 22.63527117 -57.92966553 22.668696 -51.1875 22.7109375 C-51.04505859 21.77306396 -50.90261719 20.83519043 -50.75585938 19.86889648 C-49.32548649 11.92135641 -44.12524766 5.75396386 -37.6640625 1.18359375 C-26.04916351 -5.72305754 -11.9392215 -7.03561267 0 0 Z M-32.9765625 15.65234375 C-37.78421753 21.83849702 -39.00865283 26.91576838 -38.1875 34.7109375 C-36.17286786 41.36497967 -32.23596167 45.26282927 -26.359375 48.81640625 C-21.29876172 50.90072359 -14.88172348 50.73835824 -9.80078125 48.80078125 C-3.78054822 45.23450988 0.5416122 40.78996474 2.3125 33.8984375 C3.28420148 27.6758107 1.93453245 22.91576657 -1.51953125 17.69921875 C-5.16425022 13.11206586 -8.72778398 10.13609461 -14.73046875 9.3984375 C-22.0693435 9.07451475 -27.86708018 10.10777451 -32.9765625 15.65234375 Z " fill={fillColor} transform="translate(409.1875,136.2890625)" />
            <path d="M0 0 C8.43263322 -0.09072601 16.86488069 -0.16395905 25.29787254 -0.20724869 C29.21455539 -0.22803592 33.13088415 -0.25618872 37.04736328 -0.30175781 C40.83401546 -0.34553565 44.62032921 -0.3692036 48.40721512 -0.37950897 C49.84478704 -0.38684359 51.28234251 -0.40116499 52.71976852 -0.42292023 C63.68118513 -0.58207235 72.94595715 0.46778231 81.3125 8.1875 C82.09238281 8.88230469 82.87226563 9.57710938 83.67578125 10.29296875 C89.54187388 17.12524135 91.78170191 23.8859565 93.0625 32.6875 C94.26127012 41.58027437 94.26127012 41.58027437 99 49 C106.60323901 54.17923584 113.66669648 54.736104 122.6640625 54.70703125 C124.5738942 54.72971321 124.5738942 54.72971321 126.52230835 54.75285339 C129.87302122 54.78832572 133.22244175 54.80287183 136.57324219 54.80688477 C140.00602379 54.81627957 143.43849394 54.85373181 146.87109375 54.88867188 C153.58073643 54.95136023 160.29008773 54.98642611 167 55 C167.14244141 54.06212646 167.28488281 53.12425293 167.43164062 52.15795898 C168.86201351 44.21041891 174.06225234 38.04302636 180.5234375 33.47265625 C190.2501474 27.68879248 200.19566413 26.34006387 211.1875 29.0625 C220.50124313 32.26176329 227.59788068 39.35040315 232.03125 48.015625 C235.72877765 57.25944412 235.27767148 68.29074996 231.44921875 77.3984375 C226.33260083 86.58352519 219.07745516 92.4138709 209.12109375 95.6015625 C197.81346639 97.7256472 188.15108041 95.68040164 178.75 89.3125 C173.13370775 84.83310902 169.34124969 78.75023861 167 72 C167 71.01 167 70.02 167 69 C166.28304962 69.00666183 165.56609924 69.01332367 164.8274231 69.02018738 C158.03173111 69.08059368 151.23607987 69.12612328 144.44018745 69.15543652 C140.94731202 69.17101405 137.45466061 69.19210496 133.96191406 69.22631836 C129.93552647 69.26550694 125.90936985 69.27977447 121.8828125 69.29296875 C120.64387238 69.30845261 119.40493225 69.32393646 118.12844849 69.33988953 C105.5817339 69.34229789 97.25942338 66.76952364 88.08984375 58.21875 C81.27142122 51.15422729 79.17939631 43.25371453 78 33.6875 C77.1067703 26.6340655 75.26983175 23.21939104 70.1875 18.25 C62.82867304 13.05553391 54.90356733 13.66478743 46.19140625 13.5859375 C44.85618424 13.56720174 43.52097377 13.54762658 42.18577576 13.5272522 C38.69246257 13.47617881 35.19911109 13.43642153 31.70562744 13.39910889 C28.1324333 13.35891262 24.55939499 13.30789202 20.98632812 13.2578125 C13.99099337 13.16134735 6.99556644 13.07785159 0 13 C0 8.71 0 4.42 0 0 Z M185.2109375 47.94140625 C180.40328247 54.12755952 179.17884717 59.20483088 180 67 C182.01463214 73.65404217 185.95153833 77.55189177 191.828125 81.10546875 C196.88873828 83.18978609 203.30577652 83.02742074 208.38671875 81.08984375 C214.40695178 77.52357238 218.7291122 73.07902724 220.5 66.1875 C221.47170148 59.9648732 220.12203245 55.20482907 216.66796875 49.98828125 C213.02324978 45.40112836 209.45971602 42.42515711 203.45703125 41.6875 C196.1181565 41.36357725 190.32041982 42.39683701 185.2109375 47.94140625 Z " fill={fillColor} transform="translate(191,285)" />
            <path d="M0 0 C33.32998156 -0.92869918 33.32998156 -0.92869918 48 12 C56.42071215 20.40252486 59.88724889 33.5147436 63.875 44.45703125 C64.21085617 45.37792542 64.54671234 46.29881958 64.89274597 47.24761963 C66.28295659 51.06860152 67.66977382 54.89067021 69.04101562 58.71850586 C70.05824585 61.55204757 71.09050077 64.37975627 72.125 67.20703125 C72.42519043 68.05723343 72.72538086 68.90743561 73.03466797 69.78340149 C76.2037969 78.37844238 80.55125312 86.68906153 89 91 C93.33600319 92.69432058 97.2378697 93.34109406 101.875 93.625 C103.02742188 93.69976562 104.17984375 93.77453125 105.3671875 93.8515625 C106.67042969 93.92503906 106.67042969 93.92503906 108 94 C108.07476562 93.38253906 108.14953125 92.76507813 108.2265625 92.12890625 C109.66182204 82.88414626 113.82253718 76.1196211 121.13671875 70.28125 C130.03525073 64.16234331 138.292618 63.17724662 149 64 C157.74076606 66.08966402 165.12463284 70.99595024 170.3125 78.3125 C175.81769267 87.31281499 177.7700778 96.49967032 175.30859375 106.9296875 C171.90142069 117.22248647 166.46712179 123.76945595 157 129 C156.38511719 129.34160156 155.77023437 129.68320312 155.13671875 130.03515625 C147.63490742 133.48888095 137.93464364 133.14886505 130.125 130.875 C121.50186241 127.4513424 113.83329861 120.61745865 110.125 112.0625 C109.568125 110.5465625 109.568125 110.5465625 109 109 C108.14019531 108.97421875 107.28039062 108.9484375 106.39453125 108.921875 C91.70615021 108.217089 79.61392548 104.94312009 69.16015625 94.08984375 C62.69758061 86.0815121 59.40710124 75.76016451 56.00390625 66.1796875 C55.27322818 64.15999639 54.54209475 62.14046997 53.81054688 60.12109375 C52.68223272 56.99188285 51.55767842 53.86146849 50.44116211 50.72802734 C49.34787057 47.6662365 48.23946847 44.61024918 47.12890625 41.5546875 C46.80370499 40.62945282 46.47850372 39.70421814 46.14344788 38.75094604 C42.92511887 29.95593867 38.66340868 21.42046878 30 17 C24.10239379 14.37151416 17.97092702 14.55439016 11.625 14.375 C9.94857422 14.31699219 9.94857422 14.31699219 8.23828125 14.2578125 C5.49244737 14.16393784 2.74624685 14.08089719 0 14 C0 9.38 0 4.76 0 0 Z M125.625 85.5625 C121.57863202 91.63205197 121.08839777 96.74439038 122 104 C124.32032581 109.94463637 128.37490181 113.85754368 133.82421875 117.078125 C138.61131082 119.10640817 144.33112465 118.72082445 149.28515625 117.3828125 C154.73772596 115.00847579 158.00267268 111.05085953 161 106 C162.90948276 100.27155171 162.91185715 94.22437495 160.375 88.6875 C157.25503604 83.23031923 152.95897121 80.01864557 147 78 C137.82772912 76.69751011 131.86560044 78.82922058 125.625 85.5625 Z " fill={fillColor} transform="translate(191,322)" />
            <path d="M0 0 C7.27820923 5.19504687 11.41782726 12.14973716 13.9375 20.625 C15.22509144 31.6982864 13.55806652 41.1030744 6.97265625 50.27734375 C1.06110512 57.26128511 -7.06357256 61.6719599 -16.1484375 62.6953125 C-27.1688812 63.05389527 -36.33005969 60.25270851 -44.52734375 52.66796875 C-49.85028397 47.14246421 -53.75 40.15087641 -53.75 32.3125 C-67.8715587 33.20417607 -67.8715587 33.20417607 -79.75 40.3125 C-84.3971564 46.37757257 -87.30855105 52.58265649 -89.80859375 59.76171875 C-90.16083511 60.73679886 -90.51307648 61.71187897 -90.87599182 62.71650696 C-91.99133989 65.80701908 -93.09088161 68.90279728 -94.1875 72 C-108.729253 112.91621652 -108.729253 112.91621652 -123.83203125 121.98828125 C-132.56315264 125.95059738 -140.33846405 126.71623541 -149.875 126.5 C-151.02226562 126.48646484 -152.16953125 126.47292969 -153.3515625 126.45898438 C-156.15124874 126.4239883 -158.95068955 126.37019571 -161.75 126.3125 C-161.75 121.6925 -161.75 117.0725 -161.75 112.3125 C-160.1103125 112.27511719 -158.470625 112.23773438 -156.78125 112.19921875 C-154.60414489 112.13353023 -152.42706256 112.0670839 -150.25 112 C-149.17234375 111.97744141 -148.0946875 111.95488281 -146.984375 111.93164062 C-138.4289746 111.64472171 -130.900057 110.48985409 -124.50952148 104.3137207 C-115.27981017 93.81615672 -111.68544223 76.87148735 -107.06079102 63.9855957 C-105.96211322 60.93211823 -104.85434455 57.88204466 -103.74609375 54.83203125 C-103.41886826 53.90993362 -103.09164276 52.987836 -102.75450134 52.03779602 C-97.89946297 38.68844211 -91.26209206 27.73196368 -78.02148438 21.4987793 C-71.92922329 18.95347652 -66.00653015 18.69599399 -59.46484375 18.58007812 C-57.00021386 18.42481037 -55.04789911 18.2257384 -52.75 17.3125 C-50.80962245 14.85988504 -49.84197531 12.21933257 -48.75 9.3125 C-43.78172145 1.62719412 -36.34091703 -2.60814759 -27.70703125 -5.33203125 C-17.83023888 -7.12601948 -8.49439094 -5.21311284 0 0 Z M-35.625 15.3125 C-40.07616209 21.59649354 -40.70546301 26.6392455 -39.75 34.3125 C-37.57669597 40.01159339 -33.62449696 43.81557827 -28.75 47.3125 C-23.2529273 49.14485757 -16.78352755 49.4897627 -11.32421875 47.37109375 C-5.78399268 44.04278468 -1.44792941 39.6797353 0.25 33.3125 C1.02192552 26.55230376 0.49996737 20.81038022 -3.75 15.3125 C-9.5173579 9.98610709 -14.27064515 7.93221327 -22.1171875 8.03515625 C-27.71799689 8.62515249 -31.95273158 11.09420917 -35.625 15.3125 Z " fill={fillColor} transform="translate(352.75,64.6875)" />
            <path d="M0 0 C1.71058918 2.75594924 1.57839217 4.63875484 1.125 7.8125 C-0.56348231 10.37613934 -1.99359082 11.60478322 -5.00805664 12.31518555 C-7.71027435 12.6743061 -10.41026565 12.94055992 -13.125 13.1875 C-32.68027776 15.42715606 -47.75524509 22.93535256 -61.875 36.8125 C-62.50148437 37.42609375 -63.12796875 38.0396875 -63.7734375 38.671875 C-78.13113281 53.87414063 -83.4850274 74.30646663 -83.14453125 94.7265625 C-82.48101683 112.01715994 -75.52122147 128.99165963 -63.875 141.8125 C-63.23304687 142.54597656 -62.59109375 143.27945313 -61.9296875 144.03515625 C-47.80124422 159.23235631 -28.39422787 166.91907492 -7.9375 168.1875 C-4.56444745 168.47180014 -3.10166653 168.6701745 -0.1875 170.5 C1.57036702 173.59719427 1.78209431 175.30799702 1.125 178.8125 C-1.67361639 181.75841199 -3.21630289 182.7524136 -7.30078125 183.125 C-34.36538601 180.94895138 -57.04699664 170.88999745 -75.49072266 150.45117188 C-92.06361263 130.83261147 -98.27621017 106.0393053 -96.875 80.8125 C-94.39443603 55.46857232 -81.02129685 33.0135996 -61.578125 16.91015625 C-48.27293953 7.06521197 -16.35711598 -10.35950678 0 0 Z " fill={fillColor} transform="translate(183.875,166.1875)" />
        </svg>
    );
}
