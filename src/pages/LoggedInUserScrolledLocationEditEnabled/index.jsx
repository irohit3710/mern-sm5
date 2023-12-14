import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const siddharthGoyalOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LoggedInUserScrolledLocationEditEnabledPage = () => {
  const [grouptwentyninevalue, setGrouptwentyninevalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex font-ibmplexsans h-[1024px] justify-end mx-auto relative w-full">
        <div className="h-[1709px] sm:h-[1825px] md:h-[2445px] mt-auto mx-auto md:px-5 w-full">
          <div className="absolute flex flex-col gap-4 h-full inset-y-[0] items-center justify-start left-[14%] my-auto w-[49%]">
            <List
              className="flex flex-col gap-4 items-center w-full"
              orientation="vertical"
            >
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 outline outline-[1px] outline-gray-300 pb-5 rounded w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                  <Img
                    className="h-[178px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5_178x692.png"
                    alt="rectangleFive"
                  />
                  <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtIBMPlexSans18Black900"
                    >
                      <span className="text-black-900 font-ibmplexsans text-left font-medium">
                        ✍️{" "}
                      </span>
                      <span className="text-black-900 font-ibmplexsans text-left font-medium">
                        Article
                      </span>
                    </Text>
                    <div className="flex md:flex-col flex-row gap-6 items-start justify-between mt-[13px] w-full">
                      <Text
                        className="leading-[134.17%] text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtIBMPlexSansSemiBold22"
                      >
                        What if famous brands had regular fonts? Meet
                        RegulaBrands!
                      </Text>
                      <Img
                        className="h-7 w-7"
                        src="images/img_baselinemorevert24px.svg"
                        alt="baselinemorever"
                      />
                    </div>
                    <Text
                      className="mt-3.5 text-[19px] text-gray-700_01"
                      size="txtIBMPlexSans19"
                    >
                      I’ve worked in UX for the better part of a decade. From
                      now on, I plan to rei…
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[29px] w-full">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_rectangle3.png"
                        alt="rectangleThree"
                      />
                      <Text
                        className="ml-2.5 md:ml-[0] text-black-900 text-lg"
                        size="txtIBMPlexSansSemiBold18"
                      >
                        Sarthak Kamra
                      </Text>
                      <div className="flex md:flex-1 flex-row gap-2 items-center justify-center md:ml-[0] ml-[292px] w-[15%] md:w-full">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_eye.svg"
                          alt="eye"
                        />
                        <Text
                          className="text-blue_gray-700 text-right text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          1.4k views
                        </Text>
                      </div>
                      <div className="bg-blue_gray-50 flex md:flex-1 flex-col items-center justify-start ml-10 md:ml-[0] md:mt-0 my-1.5 p-[9px] rounded-sm w-[7%] md:w-full">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_search_blue_gray_900.svg"
                          alt="search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 outline outline-[1px] outline-gray-300 pb-5 rounded w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                  <Img
                    className="h-[220px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5_220x692.png"
                    alt="rectangleFive"
                  />
                  <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtIBMPlexSans18Black900"
                    >
                      <span className="text-black-900 font-ibmplexsans text-left font-medium">
                        🔬️
                      </span>
                      <span className="text-black-900 font-ibmplexsans text-left font-medium">
                        {" "}
                        Educatio
                      </span>
                      <span className="text-black-900 font-ibmplexsans text-left font-normal">
                        n
                      </span>
                    </Text>
                    <div className="flex md:flex-col flex-row gap-6 items-start justify-between mt-[13px] w-full">
                      <Text
                        className="leading-[134.55%] text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtIBMPlexSansSemiBold22"
                      >
                        Tax Benefits for Investment under National Pension
                        Scheme launched by Government
                      </Text>
                      <Img
                        className="h-7 w-7"
                        src="images/img_baselinemorevert24px_black_900.svg"
                        alt="baselinemorever"
                      />
                    </div>
                    <Text
                      className="mt-3.5 text-[19px] text-gray-700_01"
                      size="txtIBMPlexSans19"
                    >
                      I’ve worked in UX for the better part of a decade. From
                      now on, I plan to rei…
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[29px] w-full">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_rectangle3_48x48.png"
                        alt="rectangleThree"
                      />
                      <Text
                        className="ml-2.5 md:ml-[0] text-black-900 text-lg"
                        size="txtIBMPlexSansSemiBold18"
                      >
                        Sarah West
                      </Text>
                      <div className="flex md:flex-1 flex-row gap-2 items-center justify-center md:ml-[0] ml-[321px] w-[15%] md:w-full">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_eye.svg"
                          alt="eye"
                        />
                        <Text
                          className="text-blue_gray-700 text-right text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          1.4k views
                        </Text>
                      </div>
                      <div className="bg-blue_gray-50 flex md:flex-1 flex-col items-center justify-start ml-10 md:ml-[0] md:mt-0 my-1.5 p-[9px] rounded-sm w-[7%] md:w-full">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_search_blue_gray_900.svg"
                          alt="search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="md:h-[1123px] h-[775px] sm:h-[895px] relative w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-gray-300 pb-5 rounded w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <Img
                        className="h-[220px] md:h-auto object-cover w-full"
                        src="images/img_rectangle5_1.png"
                        alt="rectangleFive"
                      />
                      <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtIBMPlexSans18Black900"
                        >
                          <span className="text-black-900 font-ibmplexsans text-left font-medium">
                            🗓️
                          </span>
                          <span className="text-black-900 font-ibmplexsans text-left font-medium">
                            {" "}
                            Meetu
                          </span>
                          <span className="text-black-900 font-ibmplexsans text-left font-normal">
                            p
                          </span>
                        </Text>
                        <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-2.5 w-full">
                          <Text
                            className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                            size="txtIBMPlexSansSemiBold22"
                          >
                            Finance & Investment Elite Social Mixer @Lujiazui
                          </Text>
                          <Button className="bg-gray-400 flex h-7 items-center justify-center p-1 rotate-[-90deg] rounded w-7">
                            <Img
                              src="images/img_baselinemorevert24px_black_900_28x28.svg"
                              alt="baselinemorever"
                            />
                          </Button>
                        </div>
                        <div className="h-[102px] md:h-[106px] mt-1 relative w-full">
                          <div className="absolute bg-white-A700 border border-blue_gray-200 border-solid bottom-[20%] flex flex-col inset-x-[0] items-center justify-start mx-auto p-2.5 rounded-lg w-full">
                            <Text
                              className="text-[13px] text-center text-deep_orange-A200"
                              size="txtIBMPlexSansSemiBold13"
                            >
                              Visit Website
                            </Text>
                          </div>
                          <div className="absolute flex flex-row items-center justify-start left-[0] top-[8%] w-[55%]">
                            <Img
                              className="h-5 w-5"
                              src="images/img_baselinetoday24px.svg"
                              alt="baselinetodayTwentyFour"
                            />
                            <Text
                              className="ml-1 text-[15px] text-black-900"
                              size="txtIBMPlexSansMedium15"
                            >
                              Fri, 12 Oct, 2018
                            </Text>
                            <Img
                              className="h-5 ml-10 w-5"
                              src="images/img_outlinelocationon24px.svg"
                              alt="outlinelocation"
                            />
                            <Text
                              className="ml-1 text-[15px] text-black-900"
                              size="txtIBMPlexSansMedium15"
                            >
                              Ahmedabad, India
                            </Text>
                          </div>
                          <div className="absolute bg-white-A700 flex flex-col gap-[13px] h-full inset-y-[0] items-start justify-start my-auto p-[11px] right-[0] rounded shadow-bs1 w-1/4">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-black-900 text-right text-sm"
                                size="txtIBMPlexSans14"
                              >
                                Edit
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-black-900 text-sm"
                                size="txtIBMPlexSans14"
                              >
                                Report
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-black-900 text-sm"
                                size="txtIBMPlexSans14"
                              >
                                Option 3
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-3 w-full">
                          <div className="flex md:flex-1 flex-row gap-2.5 items-center justify-start w-1/4 md:w-full">
                            <Img
                              className="h-12 md:h-auto rounded-[50%] w-12"
                              src="images/img_rectangle3_1.png"
                              alt="rectangleThree"
                            />
                            <Text
                              className="text-black-900 text-lg"
                              size="txtIBMPlexSansSemiBold18"
                            >
                              Ronal Jones
                            </Text>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-2 items-center justify-center md:ml-[0] ml-[315px] w-[15%] md:w-full">
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_eye.svg"
                              alt="eye"
                            />
                            <Text
                              className="text-blue_gray-700 text-right text-sm"
                              size="txtIBMPlexSansMedium14"
                            >
                              1.4k views
                            </Text>
                          </div>
                          <div className="bg-blue_gray-50 flex md:flex-1 flex-col items-center justify-start ml-10 md:ml-[0] md:mt-0 my-1.5 p-[9px] rounded-sm w-[7%] md:w-full">
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_search_blue_gray_900.svg"
                              alt="search"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-gray-300 p-5 rounded w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-lg"
                        size="txtIBMPlexSansMedium18"
                      >
                        💼️ Job
                      </Text>
                      <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-2.5 w-full">
                        <Text
                          className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                          size="txtIBMPlexSansSemiBold22"
                        >
                          Software Developer
                        </Text>
                        <Img
                          className="h-7 w-7"
                          src="images/img_baselinemorevert24px_black_900.svg"
                          alt="baselinemorever_One"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-3 w-[62%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_outlineworkoutline24px.svg"
                          alt="outlineworkoutl"
                        />
                        <Text
                          className="ml-1 sm:ml-[0] text-[15px] text-black-900"
                          size="txtIBMPlexSansMedium15"
                        >
                          Innovaccer Analytics Private Ltd.
                        </Text>
                        <Img
                          className="h-5 ml-10 sm:ml-[0] w-5"
                          src="images/img_outlinelocationon24px.svg"
                          alt="outlinelocation_One"
                        />
                        <Text
                          className="ml-1 sm:ml-[0] text-[15px] text-black-900"
                          size="txtIBMPlexSansMedium15"
                        >
                          Noida, India
                        </Text>
                      </div>
                      <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-4 p-[9px] rounded-[10px]">
                        <Text
                          className="text-[13px] text-center text-green-A700"
                          size="txtIBMPlexSansSemiBold13GreenA700"
                        >
                          Apply on Timesjobs
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-8 w-full">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_rectangle3_2.png"
                          alt="rectangleThree_One"
                        />
                        <Text
                          className="ml-2.5 md:ml-[0] text-black-900 text-lg"
                          size="txtIBMPlexSansSemiBold18"
                        >
                          Joseph Gray
                        </Text>
                        <div className="flex md:flex-1 flex-row gap-2 items-center justify-center md:ml-[0] ml-[313px] w-[15%] md:w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_eye.svg"
                            alt="eye_One"
                          />
                          <Text
                            className="text-blue_gray-700 text-right text-sm"
                            size="txtIBMPlexSansMedium14"
                          >
                            1.4k views
                          </Text>
                        </div>
                        <div className="bg-blue_gray-50 flex md:flex-1 flex-col items-center justify-start ml-10 md:ml-[0] md:mt-0 my-1.5 p-[9px] rounded-sm w-[7%] md:w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_search_blue_gray_900.svg"
                            alt="search_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white-A700 bottom-[10%] flex flex-col inset-x-[0] items-center justify-start mx-auto outline outline-[1px] outline-gray-300 pb-5 rounded w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <Img
                    className="h-[220px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5_1.png"
                    alt="rectangleFive_One"
                  />
                  <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtIBMPlexSans18Black900"
                    >
                      <span className="text-black-900 font-ibmplexsans text-left font-medium">
                        🗓️
                      </span>
                      <span className="text-black-900 font-ibmplexsans text-left font-medium">
                        {" "}
                        Meetu
                      </span>
                      <span className="text-black-900 font-ibmplexsans text-left font-normal">
                        p
                      </span>
                    </Text>
                    <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-2.5 w-full">
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtIBMPlexSansSemiBold22"
                      >
                        Finance & Investment Elite Social Mixer @Lujiazui
                      </Text>
                      <Img
                        className="h-7 w-7"
                        src="images/img_baselinemorevert24px_black_900.svg"
                        alt="baselinemorever_Two"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-start mt-3 w-[55%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_baselinetoday24px.svg"
                        alt="baselinetodayTwentyFour_One"
                      />
                      <Text
                        className="ml-1 text-[15px] text-black-900"
                        size="txtIBMPlexSansMedium15"
                      >
                        Fri, 12 Oct, 2018
                      </Text>
                      <Img
                        className="h-5 ml-10 w-5"
                        src="images/img_outlinelocationon24px.svg"
                        alt="outlinelocation_Two"
                      />
                      <Text
                        className="ml-1 text-[15px] text-black-900"
                        size="txtIBMPlexSansMedium15"
                      >
                        Ahmedabad, India
                      </Text>
                    </div>
                    <Button className="bg-white-A700 border border-blue_gray-200 border-solid cursor-pointer font-semibold min-w-[652px] md:min-w-full mt-4 py-2.5 rounded-lg text-[13px] text-center text-deep_orange-A200">
                      Visit Website
                    </Button>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-8 w-full">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_rectangle3_1.png"
                        alt="rectangleThree_Two"
                      />
                      <Text
                        className="ml-2.5 md:ml-[0] text-black-900 text-lg"
                        size="txtIBMPlexSansSemiBold18"
                      >
                        Ronal Jones
                      </Text>
                      <Img
                        className="h-[18px] md:ml-[0] ml-[397px] w-[18px]"
                        src="images/img_eye.svg"
                        alt="eye_Two"
                      />
                      <Text
                        className="ml-2 md:ml-[0] text-blue_gray-700 text-right text-sm"
                        size="txtIBMPlexSansMedium14"
                      >
                        1.4k views
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Header className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-center mx-auto top-[2%] w-full" />
        </div>
        <div className="absolute bg-white-A700 flex flex-row inset-x-[0] items-center justify-start mx-auto p-3.5 shadow-bs top-[0] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-[58px] mt-0.5 md:px-5 w-[83%]">
            <Img className="h-6" src="images/img_whole.svg" alt="whole" />
            <Input
              name="groupTwentyNine"
              placeholder="Search for your favorite groups in ATG"
              value={grouptwentyninevalue}
              onChange={(e) => setGrouptwentyninevalue(e)}
              className="font-medium leading-[normal] p-0 placeholder:text-gray-700_01 sm:pr-5 text-gray-700_01 text-left text-sm w-full"
              wrapClassName="bg-gray-100 flex md:ml-[0] ml-[305px] pl-3.5 pr-[35px] py-2.5 rounded-[21px] w-[31%] md:w-full"
              prefix={
                <Img
                  className="cursor-pointer h-[22px] mr-3.5 my-auto"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#5b5b5b"
                  className="cursor-pointer h-[22px] my-auto"
                  onClick={() => setGrouptwentyninevalue("")}
                  style={{
                    visibility:
                      grouptwentyninevalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={22}
                  width={22}
                  viewBox="0 0 22 22"
                />
              }
            ></Input>
            <div className="flex flex-row gap-3 items-center justify-between md:ml-[0] ml-[162px] w-[16%] md:w-full">
              <Img
                className="h-9 md:h-auto rounded-[50%] w-9"
                src="images/img_rectangle6.png"
                alt="rectangleSix"
              />
              <SelectBox
                className="leading-[normal] text-black-900 text-left text-sm w-[74%] sm:w-full"
                placeholderClassName="text-black-900"
                indicator={
                  <Img
                    className="h-[22px] mr-[0] w-[22px]"
                    src="images/img_baselinearrowdropdown24px_black_900.svg"
                    alt="baseline-arrow_drop_down-24px"
                  />
                }
                isMulti={false}
                name="group144"
                options={siddharthGoyalOptionsList}
                isSearchable={false}
                placeholder="Siddharth Goyal"
              />
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col items-start justify-start md:px-5 right-[14%] top-[19%] w-[17%]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-2.5 items-center justify-start w-full">
              <div className="flex flex-row items-start justify-start w-full">
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_outlinelocationon24px.svg"
                  alt="outlinelocation_Three"
                />
                <Text
                  className="ml-1 text-black-900 text-sm"
                  size="txtIBMPlexSans14"
                >
                  <span className="text-black-900 font-ibmplexsans text-left font-normal">
                    |
                  </span>
                  <span className="text-gray-600 font-ibmplexsans text-left font-normal">
                    Enter your location
                  </span>
                </Text>
                <Img
                  className="h-5 ml-[78px] w-5"
                  src="images/img_baselineclear24px.svg"
                  alt="baselineclearTwentyFour"
                />
              </div>
              <Line className="bg-gray-400_01 h-px w-full" />
            </div>
          </div>
          <div className="flex flex-row gap-[7px] items-start justify-start mt-[31px] w-full">
            <Img
              className="h-4 w-4"
              src="images/img_baselineerroroutline24px.svg"
              alt="baselineerrorou"
            />
            <Text
              className="sm:flex-1 text-black-900_87 text-xs w-[91%] sm:w-full"
              size="txtIBMPlexSans12"
            >
              Your location will help us serve better and extend a personalised
              experience.
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start mt-[53px] w-[99%] md:w-full">
            <div className="flex flex-col gap-[23px] items-start justify-start w-full">
              <div className="flex flex-row items-center justify-start w-[87%] md:w-full">
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_twotonethumbup24px.svg"
                  alt="twotonethumbupTwo"
                />
                <Text
                  className="ml-1 text-black-900 text-sm tracking-[1.40px] uppercase"
                  size="txtIBMPlexSans14"
                >
                  REcommended Groups
                </Text>
              </div>
              <List
                className="flex flex-col gap-[22px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row items-center justify-start w-full">
                  <Img
                    className="h-9 md:h-auto rounded-[50%] w-9"
                    src="images/img_rectangle6_36x36.png"
                    alt="rectangleSix"
                  />
                  <Text
                    className="ml-3 text-black-900 text-sm"
                    size="txtIBMPlexSans14"
                  >
                    Leisure
                  </Text>
                  <Button className="bg-blue_gray-50_01 cursor-pointer leading-[normal] min-w-[60px] ml-[86px] my-1.5 py-1 rounded-[12px] text-black-900 text-center text-xs">
                    Follow
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start w-full">
                  <Img
                    className="h-9 md:h-auto rounded-[50%] w-9"
                    src="images/img_rectangle6_1.png"
                    alt="rectangleSix"
                  />
                  <Text
                    className="ml-3 text-black-900 text-sm"
                    size="txtIBMPlexSans14"
                  >
                    Activism
                  </Text>
                  <Button className="bg-blue_gray-50_01 cursor-pointer leading-[normal] min-w-[60px] ml-[78px] my-1.5 py-1 rounded-[12px] text-black-900 text-center text-xs">
                    Follow
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start w-full">
                  <Img
                    className="h-9 md:h-auto rounded-[50%] w-9"
                    src="images/img_rectangle6_2.png"
                    alt="rectangleSix"
                  />
                  <Text
                    className="ml-3 text-black-900 text-sm"
                    size="txtIBMPlexSans14"
                  >
                    MBA
                  </Text>
                  <Button className="bg-blue_gray-50_01 cursor-pointer leading-[normal] min-w-[60px] ml-[102px] my-1.5 py-1 rounded-[12px] text-black-900 text-center text-xs">
                    Follow
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start w-full">
                  <Img
                    className="h-9 md:h-auto rounded-[50%] w-9"
                    src="images/img_rectangle6_3.png"
                    alt="rectangleSix"
                  />
                  <Text
                    className="ml-3 text-black-900 text-sm"
                    size="txtIBMPlexSans14"
                  >
                    Philosophy
                  </Text>
                  <Button className="bg-blue_gray-50_01 cursor-pointer leading-[normal] min-w-[60px] ml-[62px] my-1.5 py-1 rounded-[12px] text-black-900 text-center text-xs">
                    Follow
                  </Button>
                </div>
              </List>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[180px] mt-[54px] text-blue-A700 text-right text-xs"
            size="txtIBMPlexSans12BlueA700"
          >
            See More...
          </Text>
        </div>
      </div>
    </>
  );
};

export default LoggedInUserScrolledLocationEditEnabledPage;
