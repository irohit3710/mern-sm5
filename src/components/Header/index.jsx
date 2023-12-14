import React from "react";

import { Button, Img, Line, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col gap-3 items-center justify-center mb-[11px] md:ml-[0] mt-[62px] mx-[200px] w-[73%]">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <ul className="flex md:flex-1 flex-row sm:hidden items-center justify-between w-[35%] md:w-full common-row-list">
              <li>
                <Text
                  className="text-base text-black-900"
                  size="txtIBMPlexSans16"
                >
                  All Posts(32)
                </Text>
              </li>
              <li>
                <Text
                  className="text-base hover:text-black-900 text-blue_gray-400"
                  size="txtIBMPlexSans16Bluegray400"
                >
                  Article
                </Text>
              </li>
              <li>
                <Text
                  className="text-base hover:text-black-900 text-blue_gray-400"
                  size="txtIBMPlexSans16Bluegray400"
                >
                  Event
                </Text>
              </li>
              <li>
                <Text
                  className="text-base hover:text-black-900 text-blue_gray-400"
                  size="txtIBMPlexSans16Bluegray400"
                >
                  Education
                </Text>
              </li>
              <li>
                <Text
                  className="text-base hover:text-black-900 text-blue_gray-400"
                  size="txtIBMPlexSans16Bluegray400"
                >
                  Job
                </Text>
              </li>
            </ul>
            <div className="bg-gray-200 flex md:flex-1 flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[399px] p-1.5 rounded w-[13%] md:w-full">
              <Text
                className="text-[15px] text-black-900"
                size="txtIBMPlexSansMedium15"
              >
                Write a Post
              </Text>
              <Img
                className="h-[22px] w-[22px]"
                src="images/img_baselinearrowdropdown24px_black_900.svg"
                alt="baselinearrowdr"
              />
            </div>
            <Button
              className="bg-white-A700 border border-gray-500 border-solid cursor-pointer flex items-center justify-center min-w-[134px] ml-4 md:ml-[0] px-[9px] py-1.5 rounded"
              leftIcon={
                <Img
                  className="h-[22px] mb-px mr-1.5"
                  src="images/img_outlineexittoapp24px.svg"
                  alt="outline-exit_to_app-24px"
                />
              }
            >
              <div className="font-ibmplexsans font-medium leading-[normal] text-[15px] text-gray-700_02 text-left">
                Leave Group
              </div>
            </Button>
          </div>
          <div className="h-px relative w-full">
            <Line className="bg-gray-300 h-px m-auto w-full" />
            <Line className="absolute bg-black-900 h-px inset-y-[0] left-[0] my-auto w-[9%]" />
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
