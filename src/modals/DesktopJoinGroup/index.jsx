import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Line, Text } from "components";

const DesktopJoinGroupModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[52%]"
      overlayClassName="bg-black-900_90 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start mb-[139px] pb-[35px] md:px-5 rounded-lg w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="bg-gray-100_01 flex flex-col items-center justify-start p-4 rounded-tl-lg rounded-tr-lg w-full">
              <Text
                className="text-center text-sm text-teal-800"
                size="txtIBMPlexSansMedium14Teal800"
              >
                <>
                  Let&#39;s learn, share & inspire each other with our passion
                  for computer engineering. Sign up now 🤘🏼
                </>
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-[91%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[49%] md:w-full">
                <a
                  href="javascript:"
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                >
                  <Text size="txtIBMPlexSansBold24">Create Account</Text>
                </a>
                <div className="flex flex-col gap-[19px] items-center justify-start mt-[22px] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-gray-100_02 border border-blue_gray-100 border-solid flex flex-row items-center justify-start rounded-tl-sm rounded-tr-sm w-full">
                      <Text
                        className="ml-[11px] text-[15px] text-blue_gray-400"
                        size="txtIBMPlexSansMedium15Bluegray400"
                      >
                        First Name
                      </Text>
                      <Line className="bg-blue_gray-100_01 h-[45px] ml-[72px] w-px" />
                      <Text
                        className="ml-[11px] text-[15px] text-blue_gray-400"
                        size="txtIBMPlexSansMedium15Bluegray400"
                      >
                        Last Name
                      </Text>
                    </div>
                    <Text
                      className="bg-gray-100_02 border border-blue_gray-100 border-solid h-[46px] justify-center pl-3 sm:pr-5 pr-[35px] py-3 text-[15px] text-blue_gray-400 w-80"
                      size="txtIBMPlexSansMedium15Bluegray400"
                    >
                      Email
                    </Text>
                    <div className="bg-gray-100_02 border border-blue_gray-100 border-solid flex flex-row items-center justify-between p-3 w-full">
                      <Text
                        className="text-[15px] text-blue_gray-400"
                        size="txtIBMPlexSansMedium15Bluegray400"
                      >
                        Password
                      </Text>
                      <Img
                        className="h-[18px] mr-1.5 my-0.5 w-[18px]"
                        src="images/img_eye_blue_gray_400.svg"
                        alt="eye"
                      />
                    </div>
                    <Text
                      className="bg-gray-100_02 border border-blue_gray-100 border-solid h-[46px] justify-center pl-3 sm:pr-5 pr-[35px] py-[13px] rounded-bl-sm rounded-br-sm text-[15px] text-blue_gray-400 w-80"
                      size="txtIBMPlexSansMedium15Bluegray400"
                    >
                      Confirm Password
                    </Text>
                  </div>
                  <Button className="bg-blue-A700 cursor-pointer font-semibold min-w-[320px] py-2.5 rounded-[20px] text-center text-sm text-white-A700">
                    Create Account
                  </Button>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-center justify-end mt-6 p-2 rounded-sm w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-center mt-0.5 w-[55%] md:w-full">
                    <Img
                      className="h-4 md:h-auto object-cover w-4"
                      src="images/img_flogorgbblue1024.png"
                      alt="flogorgbblue102"
                    />
                    <Text
                      className="text-black-900 text-sm"
                      size="txtIBMPlexSans14"
                    >
                      Sign up with Facebook
                    </Text>
                  </div>
                </div>
                <Button
                  className="bg-white-A700 border border-blue_gray-100_01 border-solid cursor-pointer flex items-center justify-center min-w-[320px] mt-2 px-[34px] py-[9px] rounded-sm"
                  leftIcon={
                    <Img
                      className="h-4 mt-px mb-0.5 mr-2.5"
                      src="images/img_search_red_500.svg"
                      alt="search"
                    />
                  }
                >
                  <div className="sm:px-5 text-black-900 text-left text-sm">
                    Sign up with Google
                  </div>
                </Button>
              </div>
              <div className="flex flex-col items-end justify-start w-[49%] md:w-full">
                <a
                  href="javascript:"
                  className="text-[13px] text-gray-800 text-right"
                >
                  <Text size="txtIBMPlexSans13">
                    <span className="text-gray-800 font-ibmplexsans font-normal">
                      Already have an account?{" "}
                    </span>
                    <span className="text-blue-A700 font-ibmplexsans font-semibold">
                      Sign In
                    </span>
                  </Text>
                </a>
                <div className="flex flex-col h-80 items-center justify-start mt-[29px] w-80">
                  <div className="flex flex-col h-80 items-center justify-start p-5 w-80">
                    <div className="flex flex-row items-start justify-start mb-[18px] w-[93%] md:w-full">
                      <div className="md:h-52 h-[260px] relative w-[99%]">
                        <div className="md:h-52 h-[260px] m-auto w-full">
                          <div className="md:h-52 h-[260px] m-auto w-full">
                            <div className="md:h-52 h-[260px] m-auto w-full">
                              <div className="md:h-52 h-[260px] m-auto w-full">
                                <div className="md:h-52 h-[260px] m-auto w-full">
                                  <div className="md:h-52 h-[260px] m-auto w-full">
                                    <div className="md:h-52 h-[260px] m-auto w-full">
                                      <div className="md:h-52 h-[260px] m-auto w-full">
                                        <div className="md:h-52 h-[260px] m-auto w-full">
                                          <div className="md:h-52 h-[260px] m-auto w-full">
                                            <div className="md:h-52 h-[260px] m-auto w-full">
                                              <div className="md:h-52 h-[260px] m-auto w-full">
                                                <div className="md:h-52 h-[260px] m-auto w-full">
                                                  <div className="md:h-52 h-[260px] m-auto w-full">
                                                    <div className="absolute md:h-52 h-[257px] inset-[0] justify-center m-auto w-full">
                                                      <div className="md:h-52 h-[257px] m-auto w-full">
                                                        <div className="md:h-52 h-[257px] m-auto w-full">
                                                          <div className="md:h-52 h-[257px] m-auto w-full">
                                                            <div className="md:h-52 h-[257px] m-auto w-full">
                                                              <div className="md:h-52 h-[257px] m-auto w-full">
                                                                <div className="md:h-52 h-[257px] m-auto w-full">
                                                                  <div className="md:h-52 h-[257px] m-auto w-full">
                                                                    <div className="md:h-52 h-[257px] m-auto w-full">
                                                                      <div className="md:h-52 h-[257px] m-auto w-full">
                                                                        <div className="md:h-52 h-[257px] m-auto w-full">
                                                                          <div className="md:h-52 h-[257px] m-auto w-full">
                                                                            <div className="md:h-52 h-[257px] m-auto w-full">
                                                                              <div className="md:h-52 h-[257px] m-auto w-full">
                                                                                <div className="md:h-52 h-[257px] m-auto w-full">
                                                                                  <div className="absolute md:h-52 h-[257px] inset-[0] justify-center m-auto w-full">
                                                                                    <div className="absolute flex flex-col gap-[13px] h-full inset-[0] justify-center m-auto w-full">
                                                                                      <div
                                                                                        className="bg-cover bg-no-repeat flex flex-col h-9 items-end justify-start md:ml-[0] ml-[137px] p-[3px] w-[5%] md:w-full"
                                                                                        style={{
                                                                                          backgroundImage:
                                                                                            "url('images/img_group27.svg')",
                                                                                        }}
                                                                                      >
                                                                                        <Img
                                                                                          className="h-1 mb-[22px] mt-0.5 w-[3px]"
                                                                                          src="images/img_fill145.svg"
                                                                                          alt="fill145"
                                                                                        />
                                                                                      </div>
                                                                                      <div className="h-52 md:h-[161px] relative w-full">
                                                                                        <div
                                                                                          className="absolute bg-cover bg-no-repeat flex h-52 md:h-[161px] inset-y-[0] justify-end my-auto pl-[5px] py-[5px] right-[0] w-[84%]"
                                                                                          style={{
                                                                                            backgroundImage:
                                                                                              "url('images/img_group21.svg')",
                                                                                          }}
                                                                                        >
                                                                                          <div className="h-[161px] ml-auto mt-auto w-[69%]">
                                                                                            <div className="h-[161px] m-auto w-full">
                                                                                              <div className="h-[161px] m-auto w-full">
                                                                                                <div className="flex flex-row h-full items-start justify-evenly m-auto w-full">
                                                                                                  <div className="flex flex-row items-center justify-evenly mt-36 w-[12%]">
                                                                                                    <Img
                                                                                                      className="h-px w-0.5"
                                                                                                      src="images/img_fill440.svg"
                                                                                                      alt="fill440"
                                                                                                    />
                                                                                                    <Img
                                                                                                      className="h-px"
                                                                                                      src="images/img_fill440.svg"
                                                                                                      alt="fill441"
                                                                                                    />
                                                                                                  </div>
                                                                                                  <div className="h-[161px] relative w-[87%]">
                                                                                                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                                                                                      <div className="flex flex-row gap-[22px] items-start justify-between w-full">
                                                                                                        <Img
                                                                                                          className="h-[19px] mt-[120px]"
                                                                                                          src="images/img_thumbsup.svg"
                                                                                                          alt="thumbsup"
                                                                                                        />
                                                                                                        <div className="flex flex-row items-end justify-evenly">
                                                                                                          <div className="flex flex-col relative w-[93%]">
                                                                                                            <div className="md:h-[105px] sm:h-[125px] h-[161px] m-auto w-full">
                                                                                                              <div className="md:h-[105px] sm:h-[125px] h-[161px] m-auto w-full">
                                                                                                                <div className="md:h-[105px] sm:h-[125px] h-[161px] m-auto w-full">
                                                                                                                  <div className="absolute md:h-[105px] sm:h-[125px] h-[161px] inset-[0] justify-center m-auto w-full">
                                                                                                                    <div className="md:h-[105px] sm:h-[125px] h-[161px] m-auto w-full">
                                                                                                                      <div className="md:h-[105px] sm:h-[125px] h-[161px] m-auto w-full">
                                                                                                                        <div className="md:h-[105px] sm:h-[125px] h-[161px] m-auto w-full">
                                                                                                                          <div className="md:h-[105px] sm:h-[125px] h-[161px] m-auto w-full">
                                                                                                                            <div className="h-[161px] m-auto w-full">
                                                                                                                              <div className="flex flex-col gap-[21px] justify-start mb-[undefinedpx] mt-auto w-[66%] z-[1]">
                                                                                                                                <div
                                                                                                                                  className="bg-cover bg-no-repeat flex flex-col h-[15px] items-start justify-start md:ml-[0] ml-[33px] pb-[3px] w-[14%] md:w-full"
                                                                                                                                  style={{
                                                                                                                                    backgroundImage:
                                                                                                                                      "url('images/img_group43.svg')",
                                                                                                                                  }}
                                                                                                                                >
                                                                                                                                  <Img
                                                                                                                                    className="h-3"
                                                                                                                                    src="images/img_forward.svg"
                                                                                                                                    alt="forward"
                                                                                                                                  />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                  className="bg-cover bg-no-repeat md:h-[53px] h-[58px] pb-1 relative w-full"
                                                                                                                                  style={{
                                                                                                                                    backgroundImage:
                                                                                                                                      "url('images/img_group38.svg')",
                                                                                                                                  }}
                                                                                                                                >
                                                                                                                                  <div className="absolute h-[53px] inset-x-[0] mx-auto top-[0] w-[97%]">
                                                                                                                                    <Img
                                                                                                                                      className="absolute h-[53px] inset-[0] justify-center m-auto"
                                                                                                                                      src="images/img_settings.svg"
                                                                                                                                      alt="settings"
                                                                                                                                    />
                                                                                                                                    <Img
                                                                                                                                      className="absolute bottom-[0] h-px left-[0]"
                                                                                                                                      src="images/img_fill58.svg"
                                                                                                                                      alt="fillFiftyEight"
                                                                                                                                    />
                                                                                                                                    <Img
                                                                                                                                      className="absolute bottom-[26%] h-3 object-cover right-[0] w-[38%]"
                                                                                                                                      src="images/img_image505.png"
                                                                                                                                      alt="image505"
                                                                                                                                    />
                                                                                                                                  </div>
                                                                                                                                  <div className="absolute h-[19px] right-[0] top-[12%] w-5">
                                                                                                                                    <Img
                                                                                                                                      className="h-[19px] m-auto object-cover w-5"
                                                                                                                                      src="images/img_image506.png"
                                                                                                                                      alt="image506"
                                                                                                                                    />
                                                                                                                                    <Img
                                                                                                                                      className="absolute h-[17px] inset-[0] justify-center m-auto object-cover w-full"
                                                                                                                                      src="images/img_image507.png"
                                                                                                                                      alt="image507"
                                                                                                                                    />
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                              <div
                                                                                                                                className="bg-cover bg-no-repeat h-10 md:h-[31px] mb-[-8.34px] ml-[17px] w-10 z-[1]"
                                                                                                                                style={{
                                                                                                                                  backgroundImage:
                                                                                                                                    "url('images/img_group39.svg')",
                                                                                                                                }}
                                                                                                                              >
                                                                                                                                <Img
                                                                                                                                  className="h-[17px] m-auto"
                                                                                                                                  src="images/img_favorite.svg"
                                                                                                                                  alt="favorite"
                                                                                                                                />
                                                                                                                                <div
                                                                                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto w-10"
                                                                                                                                  style={{
                                                                                                                                    backgroundImage:
                                                                                                                                      "url('images/img_group48.svg')",
                                                                                                                                  }}
                                                                                                                                >
                                                                                                                                  <Img
                                                                                                                                    className="h-[9px] mt-[30px]"
                                                                                                                                    src="images/img_call.svg"
                                                                                                                                    alt="call"
                                                                                                                                  />
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                              <div className="h-32 md:h-[105px] sm:h-[125px] mt-auto mx-auto w-full">
                                                                                                                                <div className="h-32 md:h-[105px] sm:h-[125px] m-auto w-full">
                                                                                                                                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[56%]">
                                                                                                                                    <div className="flex flex-col md:gap-10 gap-[60px] justify-start w-full">
                                                                                                                                      <Img
                                                                                                                                        className="h-12 mr-[5px]"
                                                                                                                                        src="images/img_television.svg"
                                                                                                                                        alt="television"
                                                                                                                                      />
                                                                                                                                      <div
                                                                                                                                        className="bg-cover bg-no-repeat flex flex-col h-5 items-end justify-start md:ml-[0] ml-[35px] pb-0.5 px-0.5 w-[23%] md:w-full"
                                                                                                                                        style={{
                                                                                                                                          backgroundImage:
                                                                                                                                            "url('images/img_group41.svg')",
                                                                                                                                        }}
                                                                                                                                      >
                                                                                                                                        <div className="flex flex-col gap-[7px] items-start justify-start w-[67%] md:w-full">
                                                                                                                                          <Img
                                                                                                                                            className="h-1 w-1"
                                                                                                                                            src="images/img_fill9.svg"
                                                                                                                                            alt="fillNine"
                                                                                                                                          />
                                                                                                                                          <div className="flex flex-row items-center justify-evenly w-1/2 md:w-full">
                                                                                                                                            <Img
                                                                                                                                              className="h-[3px]"
                                                                                                                                              src="images/img_fill145.svg"
                                                                                                                                              alt="fillSeven"
                                                                                                                                            />
                                                                                                                                            <Img
                                                                                                                                              className="h-[3px]"
                                                                                                                                              src="images/img_fill145.svg"
                                                                                                                                              alt="fillEight"
                                                                                                                                            />
                                                                                                                                          </div>
                                                                                                                                        </div>
                                                                                                                                      </div>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                  <Line className="absolute bg-white-A700_01 bottom-[0] h-5 right-[0] w-px" />
                                                                                                                                  <Img
                                                                                                                                    className="absolute h-12 left-[0] top-[0]"
                                                                                                                                    src="images/img_television.svg"
                                                                                                                                    alt="television_One"
                                                                                                                                  />
                                                                                                                                  <div
                                                                                                                                    className="absolute bg-cover bg-no-repeat bottom-[0] md:h-[37px] h-[65px] p-0.5 right-[11%] w-[47%]"
                                                                                                                                    style={{
                                                                                                                                      backgroundImage:
                                                                                                                                        "url('images/img_group37.svg')",
                                                                                                                                    }}
                                                                                                                                  >
                                                                                                                                    <Img
                                                                                                                                      className="absolute bottom-[8%] h-[37px] inset-x-[0] mx-auto"
                                                                                                                                      src="images/img_thumbsup_teal_100.svg"
                                                                                                                                      alt="thumbsup_One"
                                                                                                                                    />
                                                                                                                                    <Line className="absolute bg-teal-100 bottom-[3%] h-[17px] right-[3%] w-px" />
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-[30px] justify-start left-[21%] top-[27%] w-1/2"
                                                                                                                                  style={{
                                                                                                                                    backgroundImage:
                                                                                                                                      "url('images/img_group40.svg')",
                                                                                                                                  }}
                                                                                                                                >
                                                                                                                                  <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
                                                                                                                                    <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                                                                                                                                      <Img
                                                                                                                                        className="h-[13px]"
                                                                                                                                        src="images/img_fill38.svg"
                                                                                                                                        alt="fillThirtyEight"
                                                                                                                                      />
                                                                                                                                      <Img
                                                                                                                                        className="h-[13px]"
                                                                                                                                        src="images/img_fill38.svg"
                                                                                                                                        alt="fillThirtyNine"
                                                                                                                                      />
                                                                                                                                    </div>
                                                                                                                                    <Img
                                                                                                                                      className="h-px ml-3 md:ml-[0] mt-0.5 w-px"
                                                                                                                                      src="images/img_fill21.svg"
                                                                                                                                      alt="fillTwentyOne"
                                                                                                                                    />
                                                                                                                                    <div className="flex flex-row items-start justify-start md:ml-[0] ml-[7px] mt-0.5 w-[11%] md:w-full">
                                                                                                                                      <div className="flex flex-col h-px items-start justify-start w-px">
                                                                                                                                        <div className="flex flex-row h-px items-start justify-evenly w-px">
                                                                                                                                          <Img
                                                                                                                                            className="h-px w-px"
                                                                                                                                            src="images/img_fill21.svg"
                                                                                                                                            alt="fillThirtyThree"
                                                                                                                                          />
                                                                                                                                          <Img
                                                                                                                                            className="h-px w-px"
                                                                                                                                            src="images/img_fill25.svg"
                                                                                                                                            alt="fillTwentyFive"
                                                                                                                                          />
                                                                                                                                        </div>
                                                                                                                                        <Img
                                                                                                                                          className="h-px w-px"
                                                                                                                                          src="images/img_fill20.svg"
                                                                                                                                          alt="fillTwenty"
                                                                                                                                        />
                                                                                                                                      </div>
                                                                                                                                      <div className="flex flex-col h-0.5 items-start justify-start w-0.5">
                                                                                                                                        <div className="flex flex-row h-px items-start justify-evenly w-px">
                                                                                                                                          <Img
                                                                                                                                            className="h-px w-px"
                                                                                                                                            src="images/img_fill21.svg"
                                                                                                                                            alt="fillTwentySix"
                                                                                                                                          />
                                                                                                                                          <Img
                                                                                                                                            className="h-px w-px"
                                                                                                                                            src="images/img_fill25.svg"
                                                                                                                                            alt="fillNineteen"
                                                                                                                                          />
                                                                                                                                        </div>
                                                                                                                                        <div className="flex flex-row items-start justify-evenly w-0.5 md:w-full">
                                                                                                                                          <Img
                                                                                                                                            className="h-px w-px"
                                                                                                                                            src="images/img_fill25.svg"
                                                                                                                                            alt="fillTwentyNine"
                                                                                                                                          />
                                                                                                                                          <Img
                                                                                                                                            className="h-px w-px"
                                                                                                                                            src="images/img_fill34.svg"
                                                                                                                                            alt="fillThirtyFour"
                                                                                                                                          />
                                                                                                                                          <Img
                                                                                                                                            className="h-px w-px"
                                                                                                                                            src="images/img_fill25.svg"
                                                                                                                                            alt="fillThirty"
                                                                                                                                          />
                                                                                                                                        </div>
                                                                                                                                      </div>
                                                                                                                                    </div>
                                                                                                                                    <div className="flex flex-row items-start justify-start md:ml-[0] ml-[3px] w-1/4 md:w-full">
                                                                                                                                      <Img
                                                                                                                                        className="h-px w-px"
                                                                                                                                        src="images/img_fill21.svg"
                                                                                                                                        alt="fillThirtyTwo"
                                                                                                                                      />
                                                                                                                                      <Img
                                                                                                                                        className="h-px ml-1.5 w-px"
                                                                                                                                        src="images/img_fill25.svg"
                                                                                                                                        alt="fillTwentyFour"
                                                                                                                                      />
                                                                                                                                      <Img
                                                                                                                                        className="h-px ml-0.5 w-px"
                                                                                                                                        src="images/img_fill25.svg"
                                                                                                                                        alt="fillTwentyTwo"
                                                                                                                                      />
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                  <div className="flex flex-col items-start justify-start mb-[5px] md:ml-[0] ml-[9px] w-[8%] md:w-full">
                                                                                                                                    <div className="h-px relative w-px">
                                                                                                                                      <Img
                                                                                                                                        className="absolute bottom-[0] h-px right-[0] w-px"
                                                                                                                                        src="images/img_fill21.svg"
                                                                                                                                        alt="fillSeventeen"
                                                                                                                                      />
                                                                                                                                      <Img
                                                                                                                                        className="absolute h-px left-[0] top-[0] w-px"
                                                                                                                                        src="images/img_fill21.svg"
                                                                                                                                        alt="fillEighteen"
                                                                                                                                      />
                                                                                                                                    </div>
                                                                                                                                    <Img
                                                                                                                                      className="h-px w-px"
                                                                                                                                      src="images/img_fill25.svg"
                                                                                                                                      alt="fillTwentyEight"
                                                                                                                                    />
                                                                                                                                    <Img
                                                                                                                                      className="h-px w-px"
                                                                                                                                      src="images/img_fill31.svg"
                                                                                                                                      alt="fillThirtyOne"
                                                                                                                                    />
                                                                                                                                    <div className="flex flex-row h-px items-start justify-evenly w-px">
                                                                                                                                      <Img
                                                                                                                                        className="h-px w-px"
                                                                                                                                        src="images/img_fill25.svg"
                                                                                                                                        alt="fillTwentySeven"
                                                                                                                                      />
                                                                                                                                      <Img
                                                                                                                                        className="h-px w-px"
                                                                                                                                        src="images/img_fill25.svg"
                                                                                                                                        alt="fillTwentyThree"
                                                                                                                                      />
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                              className="absolute bg-cover bg-no-repeat flex flex-col h-[18px] items-start justify-start left-[36%] p-0.5 top-[29%] w-[17%]"
                                                                                                                              style={{
                                                                                                                                backgroundImage:
                                                                                                                                  "url('images/img_group42.svg')",
                                                                                                                              }}
                                                                                                                            >
                                                                                                                              <div className="flex flex-col h-[5px] items-center justify-start mt-1.5 w-[5px]">
                                                                                                                                <div className="flex flex-row items-start justify-evenly w-full">
                                                                                                                                  <Img
                                                                                                                                    className="h-px w-px"
                                                                                                                                    src="images/img_fill61.svg"
                                                                                                                                    alt="fillSixtyOne"
                                                                                                                                  />
                                                                                                                                  <Img
                                                                                                                                    className="h-[3px]"
                                                                                                                                    src="images/img_fill43.svg"
                                                                                                                                    alt="fillFortyThree"
                                                                                                                                  />
                                                                                                                                  <Img
                                                                                                                                    className="h-px w-px"
                                                                                                                                    src="images/img_fill61.svg"
                                                                                                                                    alt="fillSixty"
                                                                                                                                  />
                                                                                                                                </div>
                                                                                                                                <Img
                                                                                                                                  className="h-px w-0.5"
                                                                                                                                  src="images/img_fill44.svg"
                                                                                                                                  alt="fillFortyFour"
                                                                                                                                />
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                          <div
                                                                                                                            className="absolute bg-cover bg-no-repeat flex flex-row h-1 items-center justify-end right-[44%] top-[36%] w-1"
                                                                                                                            style={{
                                                                                                                              backgroundImage:
                                                                                                                                "url('images/img_group47.svg')",
                                                                                                                            }}
                                                                                                                          >
                                                                                                                            <Img
                                                                                                                              className="h-px w-px"
                                                                                                                              src="images/img_fill49.svg"
                                                                                                                              alt="fillFortyNine"
                                                                                                                            />
                                                                                                                            <Img
                                                                                                                              className="h-0.5 w-px"
                                                                                                                              src="images/img_fill48.svg"
                                                                                                                              alt="fillFortyEight"
                                                                                                                            />
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <Img
                                                                                                                          className="absolute h-[5px] inset-x-[0] mx-auto top-[33%] w-1"
                                                                                                                          src="images/img_fill45.svg"
                                                                                                                          alt="fillFortyFive"
                                                                                                                        />
                                                                                                                      </div>
                                                                                                                      <Img
                                                                                                                        className="absolute h-2 left-[37%] top-[29%]"
                                                                                                                        src="images/img_contrast.svg"
                                                                                                                        alt="contrast"
                                                                                                                      />
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-[5px] items-start justify-start left-[31%] pt-1 px-1 top-[31%] w-[23%]"
                                                                                                                      style={{
                                                                                                                        backgroundImage:
                                                                                                                          "url('images/img_group46.svg')",
                                                                                                                      }}
                                                                                                                    >
                                                                                                                      <Img
                                                                                                                        className="h-px w-0.5"
                                                                                                                        src="images/img_fill49.svg"
                                                                                                                        alt="fillFifty"
                                                                                                                      />
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <Img
                                                                                                                    className="absolute h-px left-[44%] top-[34%] w-0.5"
                                                                                                                    src="images/img_fill49.svg"
                                                                                                                    alt="fillFiftyOne"
                                                                                                                  />
                                                                                                                  <div
                                                                                                                    className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[7px] items-start justify-start left-[0] w-1/4"
                                                                                                                    style={{
                                                                                                                      backgroundImage:
                                                                                                                        "url('images/img_group41.svg')",
                                                                                                                    }}
                                                                                                                  >
                                                                                                                    <div className="flex flex-col items-center justify-start mb-[3px] md:ml-[0] ml-[3px] w-[3px] md:w-full">
                                                                                                                      <Img
                                                                                                                        className="h-px"
                                                                                                                        src="images/img_fill53.svg"
                                                                                                                        alt="fillFiftyThree"
                                                                                                                      />
                                                                                                                      <Img
                                                                                                                        className="h-px"
                                                                                                                        src="images/img_fill53.svg"
                                                                                                                        alt="fillFiftyFour"
                                                                                                                      />
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                </div>
                                                                                                                <Img
                                                                                                                  className="absolute bottom-[0] h-1 left-[19%] w-[5px]"
                                                                                                                  src="images/img_fill55.svg"
                                                                                                                  alt="fillFiftyFive"
                                                                                                                />
                                                                                                              </div>
                                                                                                              <Img
                                                                                                                className="absolute bottom-[0] h-px left-[0]"
                                                                                                                src="images/img_fill53.svg"
                                                                                                                alt="fillFiftySix"
                                                                                                              />
                                                                                                              <Img
                                                                                                                className="absolute h-[7px] left-[41%] top-[42%]"
                                                                                                                src="images/img_mobile.svg"
                                                                                                                alt="mobile"
                                                                                                              />
                                                                                                            </div>
                                                                                                            <Img
                                                                                                              className="h-px ml-auto mr-0.5 mt-[-0.05px] z-[1]"
                                                                                                              src="images/img_fill440.svg"
                                                                                                              alt="fillSeventyNine"
                                                                                                            />
                                                                                                            <Img
                                                                                                              className="h-px ml-[25px] mt-[-0.05px] z-[1]"
                                                                                                              src="images/img_fill440.svg"
                                                                                                              alt="fillEighty"
                                                                                                            />
                                                                                                            <div className="flex flex-row items-start justify-evenly mt-[-NaNpx] w-[70%] z-[1]">
                                                                                                              <Img
                                                                                                                className="h-12"
                                                                                                                src="images/img_calendar.svg"
                                                                                                                alt="calendar"
                                                                                                              />
                                                                                                              <Img
                                                                                                                className="h-[9px]"
                                                                                                                src="images/img_call.svg"
                                                                                                                alt="call_One"
                                                                                                              />
                                                                                                            </div>
                                                                                                          </div>
                                                                                                          <Img
                                                                                                            className="h-px mt-[161px]"
                                                                                                            src="images/img_fill440.svg"
                                                                                                            alt="fillSixtyThree"
                                                                                                          />
                                                                                                        </div>
                                                                                                      </div>
                                                                                                    </div>
                                                                                                    <div className="absolute bottom-[9%] flex flex-row items-end justify-evenly left-[0] w-[23%]">
                                                                                                      <div
                                                                                                        className="bg-cover bg-no-repeat md:h-1 h-2.5 relative w-[72%]"
                                                                                                        style={{
                                                                                                          backgroundImage:
                                                                                                            "url('images/img_group44.svg')",
                                                                                                        }}
                                                                                                      >
                                                                                                        <Img
                                                                                                          className="absolute bottom-[0] h-px inset-x-[0] mx-auto"
                                                                                                          src="images/img_fill53.svg"
                                                                                                          alt="fill401"
                                                                                                        />
                                                                                                        <Img
                                                                                                          className="absolute bottom-[0] h-1 right-[20%]"
                                                                                                          src="images/img_fill38.svg"
                                                                                                          alt="fill402"
                                                                                                        />
                                                                                                        <div className="absolute flex flex-row gap-[5px] items-start justify-between left-[10%] top-[0] w-[56%]">
                                                                                                          <Img
                                                                                                            className="h-[3px] w-[3px]"
                                                                                                            src="images/img_fill406.svg"
                                                                                                            alt="fill406"
                                                                                                          />
                                                                                                          <div className="flex flex-col items-center justify-start">
                                                                                                            <Img
                                                                                                              className="h-px"
                                                                                                              src="images/img_fill53.svg"
                                                                                                              alt="fill403"
                                                                                                            />
                                                                                                            <Img
                                                                                                              className="h-px"
                                                                                                              src="images/img_fill53.svg"
                                                                                                              alt="fill404"
                                                                                                            />
                                                                                                          </div>
                                                                                                        </div>
                                                                                                        <Img
                                                                                                          className="absolute bottom-[0] h-[3px] left-[0] w-1"
                                                                                                          src="images/img_fill405.svg"
                                                                                                          alt="fill405"
                                                                                                        />
                                                                                                      </div>
                                                                                                      <Img
                                                                                                        className="h-px mt-2.5"
                                                                                                        src="images/img_fill440.svg"
                                                                                                        alt="fill442"
                                                                                                      />
                                                                                                    </div>
                                                                                                    <Img
                                                                                                      className="absolute h-2 object-cover right-[28%] top-[20%] w-[24%]"
                                                                                                      src="images/img_image491.png"
                                                                                                      alt="image491"
                                                                                                    />
                                                                                                  </div>
                                                                                                </div>
                                                                                                <Img
                                                                                                  className="absolute h-2 object-cover right-[23%] top-[17%] w-[24%]"
                                                                                                  src="images/img_image492.png"
                                                                                                  alt="image492"
                                                                                                />
                                                                                              </div>
                                                                                              <div className="absolute flex flex-col justify-start right-[8%] top-[14%] w-[53%]">
                                                                                                <Img
                                                                                                  className="h-1.5 md:h-auto md:ml-[0] ml-[19px] object-cover w-[48%]"
                                                                                                  src="images/img_image493.png"
                                                                                                  alt="image493"
                                                                                                />
                                                                                                <div className="flex flex-row items-center justify-between mt-[27px] w-full">
                                                                                                  <Img
                                                                                                    className="h-6 md:h-auto object-cover"
                                                                                                    src="images/img_image501.png"
                                                                                                    alt="image501"
                                                                                                  />
                                                                                                  <Img
                                                                                                    className="h-6 md:h-auto object-cover"
                                                                                                    src="images/img_image502.png"
                                                                                                    alt="image502"
                                                                                                  />
                                                                                                </div>
                                                                                                <Img
                                                                                                  className="h-2 md:h-auto ml-8 md:ml-[0] mt-[7px] object-cover w-[29%]"
                                                                                                  src="images/img_image508.png"
                                                                                                  alt="image508"
                                                                                                />
                                                                                              </div>
                                                                                            </div>
                                                                                            <Img
                                                                                              className="absolute bottom-[42%] h-3.5 object-cover right-[23%] w-[16%]"
                                                                                              src="images/img_image509.png"
                                                                                              alt="image509"
                                                                                            />
                                                                                          </div>
                                                                                          <Img
                                                                                            className="absolute bottom-[34%] h-1 object-cover right-[26%] w-[5%]"
                                                                                            src="images/img_image513.png"
                                                                                            alt="image513"
                                                                                          />
                                                                                        </div>
                                                                                        <div
                                                                                          className="absolute bg-cover bg-no-repeat h-[104px] md:h-[61px] inset-y-[0] left-[0] my-auto p-1 w-[31%]"
                                                                                          style={{
                                                                                            backgroundImage:
                                                                                              "url('images/img_group23.svg')",
                                                                                          }}
                                                                                        >
                                                                                          <div
                                                                                            className="absolute bg-cover bg-no-repeat md:h-[61px] h-[94px] inset-y-[0] left-[4%] my-auto w-[68%]"
                                                                                            style={{
                                                                                              backgroundImage:
                                                                                                "url('images/img_group50.svg')",
                                                                                            }}
                                                                                          >
                                                                                            <div className="absolute md:h-[61px] h-[75px] inset-x-[0] mx-auto top-[0] w-3/4">
                                                                                              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                                                                                                <div className="flex flex-col gap-[9px] items-end justify-start w-full">
                                                                                                  <div className="flex flex-row gap-[5px] items-start justify-evenly w-full">
                                                                                                    <div className="flex flex-col items-start justify-start mb-2 w-[64%]">
                                                                                                      <Img
                                                                                                        className="h-3 ml-1 md:ml-[0]"
                                                                                                        src="images/img_fill121.svg"
                                                                                                        alt="fill121"
                                                                                                      />
                                                                                                      <div className="flex flex-row gap-[7px] items-center justify-between mt-[3px] w-full">
                                                                                                        <Img
                                                                                                          className="h-[3px]"
                                                                                                          src="images/img_fill121.svg"
                                                                                                          alt="fill123"
                                                                                                        />
                                                                                                        <Line className="bg-orange-A100 h-4 w-[5px]" />
                                                                                                      </div>
                                                                                                      <Img
                                                                                                        className="h-px ml-1.5 md:ml-[0] mt-[9px]"
                                                                                                        src="images/img_fill121.svg"
                                                                                                        alt="fill125"
                                                                                                      />
                                                                                                    </div>
                                                                                                    <Img
                                                                                                      className="h-[21px] mt-[30px]"
                                                                                                      src="images/img_arrowleft.svg"
                                                                                                      alt="arrowleft"
                                                                                                    />
                                                                                                  </div>
                                                                                                  <Img
                                                                                                    className="h-px"
                                                                                                    src="images/img_fill121.svg"
                                                                                                    alt="fill127"
                                                                                                  />
                                                                                                </div>
                                                                                              </div>
                                                                                              <div
                                                                                                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-11 inset-x-[0] items-center justify-start mx-auto w-[53%]"
                                                                                                style={{
                                                                                                  backgroundImage:
                                                                                                    "url('images/img_group51.svg')",
                                                                                                }}
                                                                                              >
                                                                                                <div
                                                                                                  className="bg-cover bg-no-repeat h-11 md:h-[37px] p-0.5 relative w-full"
                                                                                                  style={{
                                                                                                    backgroundImage:
                                                                                                      "url('images/img_group53.svg')",
                                                                                                  }}
                                                                                                >
                                                                                                  <Img
                                                                                                    className="absolute h-[37px] inset-[0] justify-center m-auto"
                                                                                                    src="images/img_lightbulb.svg"
                                                                                                    alt="lightbulb"
                                                                                                  />
                                                                                                  <Img
                                                                                                    className="absolute h-0.5 left-[5%] top-1/4"
                                                                                                    src="images/img_fill134.svg"
                                                                                                    alt="fill134"
                                                                                                  />
                                                                                                  <Img
                                                                                                    className="absolute h-2 right-[20%] top-[27%]"
                                                                                                    src="images/img_fill135.svg"
                                                                                                    alt="fill135"
                                                                                                  />
                                                                                                  <Img
                                                                                                    className="absolute bottom-[34%] h-0.5 left-[20%]"
                                                                                                    src="images/img_fill134.svg"
                                                                                                    alt="fill136"
                                                                                                  />
                                                                                                  <Img
                                                                                                    className="absolute bottom-[18%] h-[7px] right-[5%]"
                                                                                                    src="images/img_fill135.svg"
                                                                                                    alt="fill137"
                                                                                                  />
                                                                                                </div>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[42px] items-center justify-start left-[0] p-[3px] w-[77%]"
                                                                                              style={{
                                                                                                backgroundImage:
                                                                                                  "url('images/img_group52.svg')",
                                                                                              }}
                                                                                            >
                                                                                              <div className="flex flex-row items-end justify-evenly mb-1 w-[73%] md:w-full">
                                                                                                <div className="flex flex-col gap-[5px] items-end justify-start mb-1 w-[84%]">
                                                                                                  <div className="flex flex-row gap-[5px] items-start justify-between mr-1 w-3/4 md:w-full">
                                                                                                    <div className="flex flex-col items-center justify-start mb-[5px]">
                                                                                                      <Img
                                                                                                        className="h-2"
                                                                                                        src="images/img_fill145.svg"
                                                                                                        alt="fill139"
                                                                                                      />
                                                                                                      <Img
                                                                                                        className="h-0.5 mt-[3px]"
                                                                                                        src="images/img_fill140.svg"
                                                                                                        alt="fill140"
                                                                                                      />
                                                                                                    </div>
                                                                                                    <Img
                                                                                                      className="h-3 mt-1.5"
                                                                                                      src="images/img_fill145.svg"
                                                                                                      alt="fill141"
                                                                                                    />
                                                                                                  </div>
                                                                                                  <Img
                                                                                                    className="h-px"
                                                                                                    src="images/img_fill142.svg"
                                                                                                    alt="fill142"
                                                                                                  />
                                                                                                </div>
                                                                                                <Img
                                                                                                  className="h-3 mt-[17px]"
                                                                                                  src="images/img_fill143.svg"
                                                                                                  alt="fill143"
                                                                                                />
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                          <Img
                                                                                            className="absolute h-px left-[4%] top-[12%]"
                                                                                            src="images/img_fill121.svg"
                                                                                            alt="fill122"
                                                                                          />
                                                                                          <Img
                                                                                            className="absolute bottom-[21%] h-[17px] right-[17%]"
                                                                                            src="images/img_arrowleft.svg"
                                                                                            alt="arrowleft_One"
                                                                                          />
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                    <div className="absolute flex flex-row items-start justify-center right-[40%] top-[5%] w-[6%]">
                                                                                      <Img
                                                                                        className="h-[5px] mt-1 w-1"
                                                                                        src="images/img_fill145.svg"
                                                                                        alt="fill147"
                                                                                      />
                                                                                      <Img
                                                                                        className="h-1"
                                                                                        src="images/img_fill140.svg"
                                                                                        alt="fill146"
                                                                                      />
                                                                                    </div>
                                                                                    <div
                                                                                      className="absolute bg-cover bg-no-repeat md:h-[75px] h-[92px] p-0.5 right-[27%] top-[4%] w-[92px]"
                                                                                      style={{
                                                                                        backgroundImage:
                                                                                          "url('images/img_group25.svg')",
                                                                                      }}
                                                                                    >
                                                                                      <div
                                                                                        className="absolute bg-cover bg-no-repeat flex flex-col gap-2 h-max inset-y-[0] justify-start my-auto p-0.5 right-[2%] w-[81%]"
                                                                                        style={{
                                                                                          backgroundImage:
                                                                                            "url('images/img_group54.svg')",
                                                                                        }}
                                                                                      >
                                                                                        <Img
                                                                                          className="h-[3px] md:ml-[0] ml-[62px] mt-1"
                                                                                          src="images/img_fill121.svg"
                                                                                          alt="fill150"
                                                                                        />
                                                                                        <div className="flex flex-row gap-2 items-end justify-start mb-[13px] ml-0.5 md:ml-[0] mr-[11px] w-4/5 md:w-full">
                                                                                          <Line className="bg-orange-A100 h-[19px] mt-[23px] w-1" />
                                                                                          <div className="flex flex-col gap-2 justify-start mb-1 w-[77%]">
                                                                                            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[5px] w-[89%] md:w-full">
                                                                                              <Line className="bg-orange-A100 h-[22px] w-0.5" />
                                                                                              <Img
                                                                                                className="h-1.5 mt-4"
                                                                                                src="images/img_arrowleft.svg"
                                                                                                alt="arrowleft_Two"
                                                                                              />
                                                                                              <Img
                                                                                                className="h-[5px]"
                                                                                                src="images/img_fill121.svg"
                                                                                                alt="fill151"
                                                                                              />
                                                                                            </div>
                                                                                            <Img
                                                                                              className="h-1.5"
                                                                                              src="images/img_arrowleft.svg"
                                                                                              alt="arrowleft_Three"
                                                                                            />
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                      <div className="absolute flex flex-col gap-[34px] inset-x-[0] justify-start mx-auto top-[2%] w-[67%]">
                                                                                        <div
                                                                                          className="bg-cover bg-no-repeat flex flex-col h-10 items-end justify-start ml-5 md:ml-[0] w-[41px] md:w-full"
                                                                                          style={{
                                                                                            backgroundImage:
                                                                                              "url('images/img_group55.svg')",
                                                                                          }}
                                                                                        >
                                                                                          <div
                                                                                            className="bg-cover bg-no-repeat flex flex-col h-[33px] items-end justify-start mb-[3px] w-[34px] md:w-full"
                                                                                            style={{
                                                                                              backgroundImage:
                                                                                                "url('images/img_group56.svg')",
                                                                                            }}
                                                                                          >
                                                                                            <div className="flex flex-col items-start justify-start my-0.5 w-[86%] md:w-full">
                                                                                              <div className="flex flex-row items-end justify-evenly ml-1 md:ml-[0] w-[87%] md:w-full">
                                                                                                <Img
                                                                                                  className="h-[11px] mt-[9px]"
                                                                                                  src="images/img_fill145.svg"
                                                                                                  alt="fill162"
                                                                                                />
                                                                                                <div className="flex flex-col gap-[5px] items-start justify-start mb-1 w-[76%]">
                                                                                                  <div className="flex flex-row items-center justify-evenly ml-1 md:ml-[0] w-[74%] md:w-full">
                                                                                                    <Img
                                                                                                      className="h-[9px]"
                                                                                                      src="images/img_fill145.svg"
                                                                                                      alt="fill160"
                                                                                                    />
                                                                                                    <Img
                                                                                                      className="h-px"
                                                                                                      src="images/img_fill140.svg"
                                                                                                      alt="fill159"
                                                                                                    />
                                                                                                  </div>
                                                                                                  <Img
                                                                                                    className="h-px"
                                                                                                    src="images/img_fill140.svg"
                                                                                                    alt="fill161"
                                                                                                  />
                                                                                                </div>
                                                                                              </div>
                                                                                              <Img
                                                                                                className="h-px mt-[3px]"
                                                                                                src="images/img_fill140.svg"
                                                                                                alt="fill163"
                                                                                              />
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                        <Img
                                                                                          className="h-[7px]"
                                                                                          src="images/img_arrowleft.svg"
                                                                                          alt="arrowleft_Four"
                                                                                        />
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                  <div className="absolute bg-white-A700_01 h-[162px] left-[20%] rounded-bl-[3px] rounded-br rounded-tl rounded-tr top-[10%] w-[36%]"></div>
                                                                                  <Img
                                                                                    className="absolute h-[194px] left-[15%] top-[5%]"
                                                                                    src="images/img_fill165.svg"
                                                                                    alt="fill165"
                                                                                  />
                                                                                </div>
                                                                                <div
                                                                                  className="absolute bg-cover bg-no-repeat flex flex-col gap-[5px] h-[194px] items-center justify-start left-[17%] p-1 top-[5%] w-[41%]"
                                                                                  style={{
                                                                                    backgroundImage:
                                                                                      "url('images/img_group22.svg')",
                                                                                  }}
                                                                                >
                                                                                  <div className="flex flex-row items-center justify-center w-2/5 md:w-full">
                                                                                    <Img
                                                                                      className="h-0.5 w-0.5"
                                                                                      src="images/img_fill179.svg"
                                                                                      alt="fill179"
                                                                                    />
                                                                                    <div className="bg-white-A700_01 h-px ml-[3px] w-[85%]"></div>
                                                                                  </div>
                                                                                  <div className="h-[162px] md:h-[172px] mb-[15px] relative w-[94%]">
                                                                                    <div className="absolute bg-white-A700_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[5px] rounded-bl-[3px] rounded-br rounded-tl rounded-tr w-full">
                                                                                      <div className="flex flex-col items-center justify-start mb-[3px] mt-[19px] w-[98%] md:w-full">
                                                                                        <div className="flex flex-row items-start justify-evenly w-full">
                                                                                          <Img
                                                                                            className="h-[11px] w-[11px]"
                                                                                            src="images/img_mobile_indigo_50.svg"
                                                                                            alt="mobile_One"
                                                                                          />
                                                                                          <Img
                                                                                            className="h-2.5"
                                                                                            src="images/img_television_indigo_50.svg"
                                                                                            alt="television_Two"
                                                                                          />
                                                                                        </div>
                                                                                        <div className="h-[78px] md:h-[84px] mt-1.5 relative w-[77px]">
                                                                                          <div className="h-[78px] m-auto w-[77px]">
                                                                                            <div className="h-[78px] m-auto w-[77px]">
                                                                                              <div className="h-[78px] m-auto w-[77px]">
                                                                                                <div className="h-[78px] m-auto w-[77px]">
                                                                                                  <div className="h-[78px] m-auto w-[77px]">
                                                                                                    <div className="absolute h-[78px] inset-[0] justify-center m-auto w-full">
                                                                                                      <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                                                                                        <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                                                                                                          <div className="flex flex-row items-start justify-evenly w-full">
                                                                                                            <Img
                                                                                                              className="h-5"
                                                                                                              src="images/img_thumbsup_indigo_50.svg"
                                                                                                              alt="thumbsup_Two"
                                                                                                            />
                                                                                                            <Img
                                                                                                              className="h-[11px] w-[11px]"
                                                                                                              src="images/img_mobile_indigo_50.svg"
                                                                                                              alt="mobile_Two"
                                                                                                            />
                                                                                                          </div>
                                                                                                          <div className="flex flex-row items-start justify-evenly w-full">
                                                                                                            <Img
                                                                                                              className="h-[11px] w-[11px]"
                                                                                                              src="images/img_mobile_indigo_50.svg"
                                                                                                              alt="mobile_Three"
                                                                                                            />
                                                                                                            <Img
                                                                                                              className="h-2.5"
                                                                                                              src="images/img_television_indigo_50.svg"
                                                                                                              alt="television_Three"
                                                                                                            />
                                                                                                          </div>
                                                                                                          <Img
                                                                                                            className="h-[33px]"
                                                                                                            src="images/img_thumbsup_indigo_50.svg"
                                                                                                            alt="thumbsup_Three"
                                                                                                          />
                                                                                                        </div>
                                                                                                      </div>
                                                                                                      <div className="absolute flex flex-col h-max inset-y-[0] items-end justify-start my-auto right-[5%] w-3/4">
                                                                                                        <Img
                                                                                                          className="h-px w-0.5"
                                                                                                          src="images/img_fill180.svg"
                                                                                                          alt="fill180"
                                                                                                        />
                                                                                                        <Img
                                                                                                          className="h-[21px] mr-0.5 mt-0.5"
                                                                                                          src="images/img_user.svg"
                                                                                                          alt="user"
                                                                                                        />
                                                                                                      </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                      className="absolute bg-cover bg-no-repeat bottom-[33%] flex flex-col h-[18px] items-center justify-start right-[16%] w-[39%]"
                                                                                                      style={{
                                                                                                        backgroundImage:
                                                                                                          "url('images/img_group57.svg')",
                                                                                                      }}
                                                                                                    >
                                                                                                      <div
                                                                                                        className="bg-cover bg-no-repeat flex flex-col h-[18px] items-center justify-start w-full"
                                                                                                        style={{
                                                                                                          backgroundImage:
                                                                                                            "url('images/img_group61.svg')",
                                                                                                        }}
                                                                                                      >
                                                                                                        <div
                                                                                                          className="bg-cover bg-no-repeat flex flex-col h-[18px] items-start justify-start w-full"
                                                                                                          style={{
                                                                                                            backgroundImage:
                                                                                                              "url('images/img_group62.svg')",
                                                                                                          }}
                                                                                                        >
                                                                                                          <Img
                                                                                                            className="h-[11px] mb-1 ml-0.5 md:ml-[0]"
                                                                                                            src="images/img_fill241.svg"
                                                                                                            alt="fill241"
                                                                                                          />
                                                                                                        </div>
                                                                                                      </div>
                                                                                                    </div>
                                                                                                    <Img
                                                                                                      className="absolute h-[18px] right-[0] top-[19%] w-[18px]"
                                                                                                      src="images/img_play.svg"
                                                                                                      alt="play"
                                                                                                    />
                                                                                                  </div>
                                                                                                  <Img
                                                                                                    className="absolute h-[7px] right-[16%] top-[14%] w-[7px]"
                                                                                                    src="images/img_play.svg"
                                                                                                    alt="play_One"
                                                                                                  />
                                                                                                  <Img
                                                                                                    className="absolute h-2 inset-y-[0] left-[16%] my-auto"
                                                                                                    src="images/img_user_gray_400_02.svg"
                                                                                                    alt="user_One"
                                                                                                  />
                                                                                                </div>
                                                                                                <div
                                                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-end justify-start left-[10%] my-auto w-[15%]"
                                                                                                  style={{
                                                                                                    backgroundImage:
                                                                                                      "url('images/img_group58.svg')",
                                                                                                  }}
                                                                                                >
                                                                                                  <Img
                                                                                                    className="h-0.5 w-[3px]"
                                                                                                    src="images/img_fill420.svg"
                                                                                                    alt="fill420"
                                                                                                  />
                                                                                                </div>
                                                                                              </div>
                                                                                              <div
                                                                                                className="absolute bg-cover bg-no-repeat flex flex-col h-[5px] items-start justify-start left-[12%] top-[41%] w-[15%]"
                                                                                                style={{
                                                                                                  backgroundImage:
                                                                                                    "url('images/img_group58.svg')",
                                                                                                }}
                                                                                              >
                                                                                                <Img
                                                                                                  className="h-px mt-0.5"
                                                                                                  src="images/img_fill418.svg"
                                                                                                  alt="fill418"
                                                                                                />
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="absolute bg-cover bg-no-repeat flex flex-col h-[5px] items-start justify-end left-[13%] top-[37%] w-[15%]"
                                                                                              style={{
                                                                                                backgroundImage:
                                                                                                  "url('images/img_group58.svg')",
                                                                                              }}
                                                                                            >
                                                                                              <Img
                                                                                                className="h-px mt-0.5"
                                                                                                src="images/img_fill418.svg"
                                                                                                alt="fill419"
                                                                                              />
                                                                                            </div>
                                                                                          </div>
                                                                                          <Img
                                                                                            className="absolute h-[3px] left-[21%] top-[44%]"
                                                                                            src="images/img_fill420.svg"
                                                                                            alt="fill421"
                                                                                          />
                                                                                        </div>
                                                                                        <div className="flex flex-row items-start justify-evenly mt-0.5 w-full">
                                                                                          <Img
                                                                                            className="h-[11px] mt-1 w-[11px]"
                                                                                            src="images/img_mobile_indigo_50.svg"
                                                                                            alt="mobile_Four"
                                                                                          />
                                                                                          <div className="h-7 md:h-[23px] relative w-[81%]">
                                                                                            <Img
                                                                                              className="absolute bottom-[0] h-[23px] inset-x-[0] mx-auto"
                                                                                              src="images/img_thumbsup_indigo_50.svg"
                                                                                              alt="thumbsup_Four"
                                                                                            />
                                                                                            <Img
                                                                                              className="absolute h-[18px] left-[0] top-[0] w-[18px]"
                                                                                              src="images/img_thumbsup.svg"
                                                                                              alt="thumbsup_Five"
                                                                                            />
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                    <Img
                                                                                      className="absolute h-4 inset-x-[0] mx-auto top-[0]"
                                                                                      src="images/img_television_indigo_50_16x89.svg"
                                                                                      alt="television_Four"
                                                                                    />
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                              <div className="absolute bottom-[13%] flex flex-col gap-1.5 justify-start right-[38%] w-[16%]">
                                                                                <Img
                                                                                  className="h-[47px] ml-5 md:ml-[0]"
                                                                                  src="images/img_user.svg"
                                                                                  alt="user_Two"
                                                                                />
                                                                                <div
                                                                                  className="bg-cover bg-no-repeat flex flex-col h-[95px] items-center justify-start mr-[11px] w-[72%] md:w-full"
                                                                                  style={{
                                                                                    backgroundImage:
                                                                                      "url('images/img_group24.svg')",
                                                                                  }}
                                                                                >
                                                                                  <Img
                                                                                    className="h-[95px]"
                                                                                    src="images/img_bookmark.svg"
                                                                                    alt="bookmark"
                                                                                  />
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                            <Img
                                                                              className="absolute bottom-[23%] h-[59px] left-[28%] w-[60px]"
                                                                              src="images/img_checkmark.svg"
                                                                              alt="checkmark"
                                                                            />
                                                                          </div>
                                                                          <Img
                                                                            className="common-pointer absolute h-[38px] inset-y-[0] left-[40%] my-auto"
                                                                            src="images/img_user_orange_a100.svg"
                                                                            alt="user_Three"
                                                                            onClick={
                                                                              props.onRequestClose
                                                                            }
                                                                          />
                                                                        </div>
                                                                        <Img
                                                                          className="absolute h-[38px] inset-y-[0] left-[40%] my-auto"
                                                                          src="images/img_close.svg"
                                                                          alt="close"
                                                                        />
                                                                      </div>
                                                                      <div
                                                                        className="absolute bg-cover bg-no-repeat bottom-[23%] flex flex-col h-[59px] items-start justify-start left-[28%] p-1 w-[60px]"
                                                                        style={{
                                                                          backgroundImage:
                                                                            "url('images/img_group26.svg')",
                                                                        }}
                                                                      >
                                                                        <div
                                                                          className="bg-cover bg-no-repeat flex flex-col h-10 items-start justify-end mb-[9px] ml-2 md:ml-[0] pt-2.5 px-2.5 w-[52%] md:w-full"
                                                                          style={{
                                                                            backgroundImage:
                                                                              "url('images/img_group63.svg')",
                                                                          }}
                                                                        >
                                                                          <Img
                                                                            className="h-px ml-1.5 md:ml-[0] mt-[29px] w-px"
                                                                            src="images/img_fill387.svg"
                                                                            alt="fill387"
                                                                          />
                                                                          <Img
                                                                            className="h-px ml-1.5 md:ml-[0] w-px"
                                                                            src="images/img_fill387.svg"
                                                                            alt="fill386"
                                                                          />
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div className="absolute bottom-[13%] flex flex-col items-start justify-start left-[41%] w-[13%]">
                                                                      <div
                                                                        className="bg-cover bg-no-repeat flex flex-col h-4 items-end justify-start ml-4 md:ml-[0] w-[23%] md:w-full"
                                                                        style={{
                                                                          backgroundImage:
                                                                            "url('images/img_group43.svg')",
                                                                        }}
                                                                      >
                                                                        <Img
                                                                          className="h-3 mb-0.5"
                                                                          src="images/img_fill390.svg"
                                                                          alt="fill390"
                                                                        />
                                                                      </div>
                                                                      <Img
                                                                        className="h-[3px] mt-[23px]"
                                                                        src="images/img_fill384.svg"
                                                                        alt="fill384"
                                                                      />
                                                                      <Line className="bg-deep_orange-A100 h-[54px] ml-5 md:ml-[0] mt-[26px] w-[5px]" />
                                                                    </div>
                                                                  </div>
                                                                  <div
                                                                    className="absolute bg-cover bg-no-repeat flex flex-col h-4 inset-x-[0] items-end justify-start mx-auto top-[34%] w-[5%]"
                                                                    style={{
                                                                      backgroundImage:
                                                                        "url('images/img_group42.svg')",
                                                                    }}
                                                                  >
                                                                    <div className="flex flex-col h-1.5 items-start justify-start mt-[5px] w-1.5">
                                                                      <Img
                                                                        className="h-px w-0.5"
                                                                        src="images/img_fill420.svg"
                                                                        alt="fill397"
                                                                      />
                                                                      <div className="flex flex-row items-start justify-evenly w-full">
                                                                        <Img
                                                                          className="h-px w-px"
                                                                          src="images/img_fill437.svg"
                                                                          alt="fill437"
                                                                        />
                                                                        <Img
                                                                          className="h-0.5 w-px"
                                                                          src="images/img_fill393.svg"
                                                                          alt="fill393"
                                                                        />
                                                                        <Img
                                                                          className="h-px w-px"
                                                                          src="images/img_fill438.svg"
                                                                          alt="fill438"
                                                                        />
                                                                      </div>
                                                                      <Img
                                                                        className="h-px w-px"
                                                                        src="images/img_fill44.svg"
                                                                        alt="fill394"
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-1 items-start justify-start left-[47%] top-[37%] w-1"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group47.svg')",
                                                                  }}
                                                                >
                                                                  <div className="flex flex-col items-start justify-start md:w-full w-px">
                                                                    <div
                                                                      className="bg-cover bg-no-repeat flex flex-row h-px items-center justify-evenly w-px"
                                                                      style={{
                                                                        backgroundImage:
                                                                          "url('images/img_group64.svg')",
                                                                      }}
                                                                    >
                                                                      <Img
                                                                        className="h-px w-px"
                                                                        src="images/img_fill420.svg"
                                                                        alt="fill396"
                                                                      />
                                                                    </div>
                                                                    <Img
                                                                      className="h-px w-px"
                                                                      src="images/img_fill179.svg"
                                                                      alt="fill422"
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <Img
                                                                className="absolute h-[9px] inset-x-[0] mx-auto top-[34%]"
                                                                src="images/img_question.svg"
                                                                alt="question"
                                                              />
                                                            </div>
                                                            <div
                                                              className="absolute bg-cover bg-no-repeat bottom-[38%] md:h-[11px] h-[17px] left-[24%] w-[10%]"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_group44.svg')",
                                                              }}
                                                            >
                                                              <div className="absolute h-3.5 md:h-[11px] inset-y-[0] left-[0] my-auto w-[70%]">
                                                                <Img
                                                                  className="absolute h-[11px] inset-x-[0] mx-auto top-[0]"
                                                                  src="images/img_checkmark_white_a700_01.svg"
                                                                  alt="checkmark_One"
                                                                />
                                                                <Img
                                                                  className="absolute bottom-[0] h-[3px] left-[19%] w-0.5"
                                                                  src="images/img_fill145.svg"
                                                                  alt="fill409"
                                                                />
                                                                <Img
                                                                  className="absolute bottom-[0] h-0.5 right-1/4 w-0.5"
                                                                  src="images/img_fill140.svg"
                                                                  alt="fill410"
                                                                />
                                                              </div>
                                                              <Img
                                                                className="absolute bottom-[0] h-0.5 left-[35%] w-0.5"
                                                                src="images/img_fill140.svg"
                                                                alt="fill411"
                                                              />
                                                              <Img
                                                                className="absolute h-px right-[9%] top-[12%]"
                                                                src="images/img_fill412.svg"
                                                                alt="fill412"
                                                              />
                                                              <Img
                                                                className="absolute h-[3px] inset-y-[0] my-auto right-[9%] w-[3px]"
                                                                src="images/img_fill413.svg"
                                                                alt="fill413"
                                                              />
                                                            </div>
                                                            <div className="absolute flex flex-col items-start justify-start right-[30%] top-[22%] w-[24%]">
                                                              <div className="flex flex-row gap-[23px] items-end justify-between w-full">
                                                                <Img
                                                                  className="h-[3px] mt-[27px]"
                                                                  src="images/img_fill423.svg"
                                                                  alt="fill423"
                                                                />
                                                                <div
                                                                  className="bg-cover bg-no-repeat flex flex-col h-[31px] items-center justify-start w-[31px]"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group39.svg')",
                                                                  }}
                                                                >
                                                                  <div
                                                                    className="bg-cover bg-no-repeat flex flex-col h-[31px] items-center justify-start p-[7px] w-[31px]"
                                                                    style={{
                                                                      backgroundImage:
                                                                        "url('images/img_group66.svg')",
                                                                    }}
                                                                  >
                                                                    <Img
                                                                      className="h-[13px]"
                                                                      src="images/img_favorite.svg"
                                                                      alt="favorite_One"
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <Img
                                                                className="h-px md:ml-[0] ml-[13px] mt-[7px] w-0.5"
                                                                src="images/img_fill49.svg"
                                                                alt="fill443"
                                                              />
                                                              <div
                                                                className="bg-cover bg-no-repeat flex flex-col h-[22px] items-center justify-start mt-[5px] w-3/5 md:w-full"
                                                                style={{
                                                                  backgroundImage:
                                                                    "url('images/img_group31.svg')",
                                                                }}
                                                              >
                                                                <div
                                                                  className="bg-cover bg-no-repeat flex flex-col h-[22px] items-end justify-start pl-0.5 py-0.5 w-full"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group65.svg')",
                                                                  }}
                                                                >
                                                                  <Img
                                                                    className="h-0.5 mb-[13px]"
                                                                    src="images/img_fill418.svg"
                                                                    alt="fill439"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <Img
                                                            className="absolute h-3.5 right-[37%] top-[32%]"
                                                            src="images/img_inbox.svg"
                                                            alt="inbox"
                                                          />
                                                        </div>
                                                        <Img
                                                          className="absolute h-[13px] right-[40%] top-[30%]"
                                                          src="images/img_call.svg"
                                                          alt="call_Two"
                                                        />
                                                      </div>
                                                      <div
                                                        className="absolute bg-cover bg-no-repeat md:h-1 h-[15px] right-[38%] top-[31%] w-[4%]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_call.svg')",
                                                        }}
                                                      >
                                                        <Img
                                                          className="absolute h-1 left-[0] top-[0] w-1"
                                                          src="images/img_fill49.svg"
                                                          alt="fill452"
                                                        />
                                                        <Img
                                                          className="absolute h-1 right-[0] top-[13%] w-1"
                                                          src="images/img_fill49.svg"
                                                          alt="fill453"
                                                        />
                                                      </div>
                                                      <div className="absolute bg-blue_gray-200_01 bottom-[23%] h-2.5 left-[22%] w-1/4"></div>
                                                    </div>
                                                    <Img
                                                      className="absolute bottom-[20%] h-[11px] left-[35%] w-[11px]"
                                                      src="images/img_play_white_a700_01.svg"
                                                      alt="play_Two"
                                                    />
                                                    <Img
                                                      className="absolute h-[47px] object-cover right-[40%] top-[0] w-[12%]"
                                                      src="images/img_image478.png"
                                                      alt="image478"
                                                    />
                                                  </div>
                                                  <Img
                                                    className="absolute h-[38px] object-cover right-[32%] top-[1%] w-[8%]"
                                                    src="images/img_image479.png"
                                                    alt="image479"
                                                  />
                                                </div>
                                                <div className="absolute flex flex-col gap-[57px] items-end justify-start right-[32%] top-[7%] w-[10%]">
                                                  <Img
                                                    className="h-[7px] md:h-auto object-cover w-[67%]"
                                                    src="images/img_image480.png"
                                                    alt="image480"
                                                  />
                                                  <Img
                                                    className="h-[9px] md:h-auto object-cover w-full"
                                                    src="images/img_image481.png"
                                                    alt="image481"
                                                  />
                                                </div>
                                              </div>
                                              <Img
                                                className="absolute h-2 object-cover right-[31%] top-[30%] w-[11%]"
                                                src="images/img_image482.png"
                                                alt="image482"
                                              />
                                              <Img
                                                className="absolute bottom-[23%] h-4 left-[42%] object-cover w-[10%]"
                                                src="images/img_image483.png"
                                                alt="image483"
                                              />
                                            </div>
                                            <Img
                                              className="absolute bottom-[29%] h-[30px] left-[42%] object-cover w-[9%]"
                                              src="images/img_image484.png"
                                              alt="image484"
                                            />
                                          </div>
                                          <Img
                                            className="absolute bottom-[31%] h-[61px] left-[43%] object-cover w-[8%]"
                                            src="images/img_image485.png"
                                            alt="image485"
                                          />
                                        </div>
                                        <Img
                                          className="absolute h-[13px] left-[42%] object-cover top-[42%] w-[9%]"
                                          src="images/img_image486.png"
                                          alt="image486"
                                        />
                                      </div>
                                      <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[42%] w-[21%]">
                                        <Img
                                          className="h-[3px] md:h-auto md:ml-[0] ml-[9px] object-cover w-[46%]"
                                          src="images/img_image487.png"
                                          alt="image487"
                                        />
                                        <div className="flex flex-row gap-[22px] items-start justify-between mt-0.5 w-full">
                                          <Img
                                            className="h-1.5 md:h-auto object-cover"
                                            src="images/img_image488.png"
                                            alt="image488"
                                          />
                                          <Img
                                            className="h-5 md:h-auto mt-0.5 object-cover w-[19px]"
                                            src="images/img_image489.png"
                                            alt="image489"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <Img
                                      className="absolute h-[7px] object-cover right-[41%] top-[45%] w-[8%]"
                                      src="images/img_image490.png"
                                      alt="image490"
                                    />
                                    <div className="absolute bottom-[22%] h-[23px] left-[6%] w-[23px]">
                                      <Img
                                        className="h-[23px] m-auto object-cover w-[23px]"
                                        src="images/img_image494.png"
                                        alt="image494"
                                      />
                                      <Img
                                        className="absolute h-2 inset-y-[0] left-[0] my-auto object-cover w-[70%]"
                                        src="images/img_image495.png"
                                        alt="image495"
                                      />
                                    </div>
                                  </div>
                                  <Img
                                    className="absolute bottom-[23%] h-7 left-[6%] object-cover w-[10%]"
                                    src="images/img_image496.png"
                                    alt="image496"
                                  />
                                </div>
                                <Img
                                  className="absolute bottom-[28%] h-[38px] left-[9%] object-cover w-[6%]"
                                  src="images/img_image497.png"
                                  alt="image497"
                                />
                              </div>
                              <div className="absolute bottom-[28%] flex flex-col gap-2.5 items-center justify-start left-[6%] w-[10%]">
                                <Img
                                  className="h-3 md:h-auto object-cover w-[18%]"
                                  src="images/img_image498.png"
                                  alt="image498"
                                />
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-full"
                                  src="images/img_image499.png"
                                  alt="image499"
                                />
                              </div>
                            </div>
                            <Img
                              className="absolute bottom-[35%] h-5 left-[6%] object-cover w-[9%]"
                              src="images/img_image500.png"
                              alt="image500"
                            />
                          </div>
                          <div className="absolute bottom-[22%] flex flex-row items-start justify-between left-[2%] w-2/5">
                            <div className="md:h-10 h-[27px] mb-[13px] relative w-[8%]">
                              <Img
                                className="h-[27px] m-auto object-cover w-full"
                                src="images/img_image503.png"
                                alt="image503"
                              />
                              <Img
                                className="absolute h-[9px] object-cover right-[0] top-[0] w-3/4"
                                src="images/img_image504.png"
                                alt="image504"
                              />
                            </div>
                            <Img
                              className="h-[19px] md:h-auto mt-[21px] object-cover w-[18px]"
                              src="images/img_image510.png"
                              alt="image510"
                            />
                            <Img
                              className="h-[11px] md:h-auto mt-[26px] object-cover"
                              src="images/img_image511.png"
                              alt="image511"
                            />
                          </div>
                        </div>
                        <Img
                          className="absolute bottom-[26%] h-[7px] left-[33%] object-cover w-[9%]"
                          src="images/img_image512.png"
                          alt="image512"
                        />
                      </div>
                      <Img
                        className="h-px mt-[254px] w-0.5"
                        src="images/img_fill440.svg"
                        alt="fillSixtyTwo"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  className="mt-[13px] text-[11px] text-black-900_90 text-right tracking-[-0.09px]"
                  size="txtIBMPlexSans11"
                >
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default DesktopJoinGroupModal;
