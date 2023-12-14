import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const writeAPostOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const NotLoggedInDesktopPage = () => {
  const [grouptwentyninevalue, setGrouptwentyninevalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ibmplexsans items-center justify-start mx-auto pb-[98px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full">
            <Img
              className="h-6 md:ml-[0] ml-[72px] md:mt-0 my-6"
              src="images/img_whole.svg"
              alt="whole"
            />
            <Input
              name="groupTwentyNine"
              placeholder="Search for your favorite groups in ATG"
              value={grouptwentyninevalue}
              onChange={(e) => setGrouptwentyninevalue(e)}
              className="font-medium leading-[normal] p-0 placeholder:text-gray-700_01 sm:pr-5 text-gray-700_01 text-left text-sm w-full"
              wrapClassName="bg-gray-100 flex md:flex-1 md:ml-[0] ml-[305px] md:mt-0 my-[15px] pl-3.5 pr-[35px] py-2.5 rounded-[21px] w-1/4 md:w-full"
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
            <Text
              className="mb-[23px] md:ml-[0] ml-[261px] md:mt-0 mt-[27px] text-base text-blue_gray-900 text-right"
              size="txtIBMPlexSansMedium16"
            >
              <span className="text-blue_gray-900 font-ibmplexsans font-medium">
                Create account.{" "}
              </span>
              <span className="text-blue-A700 font-ibmplexsans font-bold">
                It’s free!
              </span>
            </Text>
            <Img
              className="h-6 mb-[22px] mr-[72px] md:mt-0 mt-[26px] w-6"
              src="images/img_baselinearrowdropdown24px.svg"
              alt="baselinearrowdr"
            />
          </header>
          <div className="h-[440px] md:px-5 relative w-full">
            <Img
              className="h-[440px] m-auto object-cover w-full"
              src="images/img_rectangle2.png"
              alt="rectangleTwo"
            />
            <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[77px] md:px-10 sm:px-5 w-full">
              <Text
                className="md:ml-[0] ml-[122px] mt-[212px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                size="txtIBMPlexSansBold36"
              >
                Computer Engineering
              </Text>
              <Text
                className="md:ml-[0] ml-[122px] text-lg text-white-A700"
                size="txtIBMPlexSans18"
              >
                142,765 Computer Engineers follow this
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1040px] mt-10 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-row items-center justify-between w-[35%] md:w-full">
              <Text
                className="text-base text-black-900"
                size="txtIBMPlexSans16"
              >
                All Posts(32)
              </Text>
              <Text
                className="text-base text-blue_gray-400"
                size="txtIBMPlexSans16Bluegray400"
              >
                Article
              </Text>
              <Text
                className="text-base text-blue_gray-400"
                size="txtIBMPlexSans16Bluegray400"
              >
                Event
              </Text>
              <Text
                className="text-base text-blue_gray-400"
                size="txtIBMPlexSans16Bluegray400"
              >
                Education
              </Text>
              <Text
                className="text-base text-blue_gray-400"
                size="txtIBMPlexSans16Bluegray400"
              >
                Job
              </Text>
            </div>
            <SelectBox
              className="bg-gray-200 md:flex-1 font-medium leading-[normal] md:ml-[0] ml-[408px] pl-3 pr-1.5 py-[7px] rounded text-[15px] text-black-900 text-left w-[13%] md:w-full"
              placeholderClassName="text-black-900"
              indicator={
                <Img
                  className="h-[22px] mr-[0] w-[22px]"
                  src="images/img_baselinearrowdropdown24px_black_900.svg"
                  alt="baseline-arrow_drop_down-24px"
                />
              }
              isMulti={false}
              name="groupSixtyOne"
              options={writeAPostOptionsList}
              isSearchable={false}
              placeholder="Write a Post"
            />
            <Button
              className="bg-blue-A700 cursor-pointer flex items-center justify-center min-w-[125px] ml-4 md:ml-[0] px-[11px] py-1.5 rounded"
              leftIcon={
                <Img
                  className="h-[22px] mb-px mr-1.5"
                  src="images/img_baselinegroupadd24px.svg"
                  alt="baseline-group_add-24px"
                />
              }
            >
              <div className="font-medium leading-[normal] text-[15px] text-left text-white-A700">
                Join Group
              </div>
            </Button>
          </div>
          <div className="md:h-[13px] h-px max-w-[1040px] mt-3 mx-auto md:px-5 relative w-full">
            <Line className="bg-gray-300 h-px m-auto w-full" />
            <Line className="absolute bg-black-900 h-px inset-y-[0] left-[0] my-auto w-[9%]" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1040px] mt-[27px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-4 items-center justify-start w-[67%] md:w-full">
              <List
                className="flex flex-col gap-4 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 outline outline-[1px] outline-gray-300 pb-5 rounded w-full">
                  <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                    <Img
                      className="h-[220px] md:h-auto object-cover w-full"
                      src="images/img_rectangle5.png"
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
              <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-gray-300 pb-5 rounded w-full">
                <div className="flex flex-col gap-[19px] items-center justify-start w-full">
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
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-2.5 w-full">
                      <Text
                        className="sm:mt-0 mt-[3px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtIBMPlexSansSemiBold22"
                      >
                        Finance & Investment Elite Social Mixer @Lujiazui
                      </Text>
                      <div className="bg-gray-400 flex flex-col items-center justify-start p-0.5 rounded">
                        <Img
                          className="h-7 w-7"
                          src="images/img_baselinemorevert24px_black_900.svg"
                          alt="baselinemorever"
                        />
                      </div>
                    </div>
                    <div className="h-[102px] md:h-[104px] mt-[3px] relative w-full">
                      <div className="absolute bg-white-A700 border border-blue_gray-200 border-solid bottom-[22%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-2.5 rounded-lg w-full">
                        <Text
                          className="text-[13px] text-center text-deep_orange-A200"
                          size="txtIBMPlexSansSemiBold13"
                        >
                          Visit Website
                        </Text>
                      </div>
                      <div className="absolute flex flex-row items-center justify-start left-[0] top-[6%] w-[55%]">
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
                          className="h-5 ml-[66px] w-5"
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
                      <div className="absolute bg-white-A700 flex flex-col gap-[13px] h-full inset-y-[0] items-start justify-end my-auto p-[9px] right-[0] rounded shadow-bs1 w-1/4">
                        <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0]">
                          <Text
                            className="text-black-900 text-right text-sm"
                            size="txtIBMPlexSans14"
                          >
                            Edit
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0]">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtIBMPlexSans14"
                          >
                            Report
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0]">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtIBMPlexSans14"
                          >
                            Option 3
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-2.5 w-full">
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
                          alt="search_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-gray-300 p-[18px] rounded w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtIBMPlexSansMedium18"
                  >
                    💼️ Job
                  </Text>
                  <div className="flex flex-row sm:gap-10 items-start justify-between mt-[15px] w-full">
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
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-2.5 w-[62%] md:w-full">
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
                  <Button className="bg-white-A700 border border-blue_gray-200 border-solid cursor-pointer font-semibold min-w-[650px] md:min-w-full ml-0.5 md:ml-[0] mt-[15px] py-[9px] rounded-[10px] text-[13px] text-center text-green-A700">
                    Apply on Timesjobs
                  </Button>
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
                        alt="search_Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-8 items-center justify-start md:mt-0 mt-[27px] w-[24%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-start w-full">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_outlinelocationon24px.svg"
                      alt="outlinelocation_Two"
                    />
                    <Text
                      className="ml-1 text-black-900 text-sm"
                      size="txtIBMPlexSans14"
                    >
                      Noida, India
                    </Text>
                    <Img
                      className="h-5 ml-[124px] w-5"
                      src="images/img_edit.svg"
                      alt="edit_One"
                    />
                  </div>
                  <Line className="bg-gray-400_01 h-px w-full" />
                </div>
              </div>
              <div className="flex flex-row gap-[7px] items-start justify-start w-full">
                <Img
                  className="h-4 w-4"
                  src="images/img_baselineerroroutline24px.svg"
                  alt="baselineerrorou"
                />
                <Text
                  className="sm:flex-1 text-black-900_87 text-xs w-[91%] sm:w-full"
                  size="txtIBMPlexSans12"
                >
                  Your location will help us serve better and extend a
                  personalised experience.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotLoggedInDesktopPage;
