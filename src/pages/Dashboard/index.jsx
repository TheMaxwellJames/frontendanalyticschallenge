import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const formfilterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardPage = () => {
  const [frameonevalue, setFrameonevalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-plusjakartasans sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <div className="bg-gray-50 border-blue_gray-50 border-r border-solid flex flex-col h-[876px] md:h-auto items-center justify-start mb-[84px] md:px-5 py-5 w-20">
          <div className="flex flex-col md:gap-10 gap-64 items-center justify-start w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <Img className="h-10 w-10" src="images/img_save.svg" alt="save" />
              <Img
                className="h-[428px] w-full"
                src="images/img_frame8.svg"
                alt="frameEight"
              />
            </div>
            <Img
              className="h-[152px] w-20"
              src="images/img_othermenu.svg"
              alt="othermenu"
            />
          </div>
        </div>
        <div className="bg-gray-50_01 flex flex-col items-center justify-end pb-9 md:px-5 w-[95%] md:w-full">
          <div className="flex flex-col gap-5 items-center justify-start w-full">
            <div className="bg-gray-50_01 flex flex-col gap-[18px] items-center justify-start pt-[18px] w-full">
              <header className="flex md:flex-col flex-row md:gap-[21px] items-center justify-between w-full">
                <div className="flex flex-1 sm:flex-col flex-row gap-[25px] items-center justify-between max-w-[810px] w-full">
                  <Text
                    className="text-gray-900_01 text-xl w-auto"
                    size="txtPlusJakartaSansSemiBold20"
                  >
                    Dashboard
                  </Text>
                  <div className="flex sm:flex-1 flex-col font-inter items-start justify-start w-[349px] sm:w-full">
                    <Input
                      name="frameOne"
                      placeholder="Search..."
                      value={frameonevalue}
                      onChange={(e) => setFrameonevalue(e)}
                      className="p-0 placeholder:text-gray-500_01 sm:pr-5 text-base text-gray-500_01 text-left w-full"
                      wrapClassName="bg-white-A700 border border-gray-300 border-solid flex pl-4 pr-[35px] py-[13px] rounded-[24px] w-full"
                      prefix={
                        <Img
                          className="cursor-pointer h-[18px] mr-2 my-px"
                          src="images/img_search.svg"
                          alt="search"
                        />
                      }
                      suffix={
                        <CloseSVG
                          fillColor="#a3a3a3"
                          className="cursor-pointer h-[18px] my-auto"
                          onClick={() => setFrameonevalue("")}
                          style={{
                            visibility:
                              frameonevalue?.length <= 0 ? "hidden" : "visible",
                          }}
                          height={18}
                          width={18}
                          viewBox="0 0 18 18"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="flex sm:flex-1 sm:flex-col flex-row font-inter gap-5 items-center justify-start w-auto sm:w-full">
                  <div className="flex flex-row gap-5 items-center justify-end w-auto">
                    <div className="flex flex-col h-10 md:h-auto items-center justify-center px-4 py-3 rotate-[180deg] w-auto">
                      <div className="flex flex-row gap-2.5 items-center justify-center rotate-[180deg] w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_solarcalendarlinear.svg"
                          alt="solarcalendarli"
                        />
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtInterMedium14"
                        >
                          November 15, 2023
                        </Text>
                      </div>
                    </div>
                    <Button className="border border-gray-300_01 border-solid flex h-10 items-center justify-center p-[11px] rounded-[50%] w-10">
                      <Img src="images/img_user.svg" alt="user" />
                    </Button>
                  </div>
                  <div className="border border-gray-300_01 border-solid flex flex-row gap-3 items-center justify-center px-2 py-1.5 rounded-[26px] w-auto">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <div className="flex flex-col h-[38px] items-center justify-start w-[38px]">
                        <Img
                          className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                          src="images/img_rectangle1061.png"
                          alt="rectangle1061"
                        />
                      </div>
                      <div className="flex flex-col gap-1 items-end justify-start w-auto">
                        <Text
                          className="text-base text-gray-900_01 text-right w-auto"
                          size="txtInterRegular16"
                        >
                          Justin Bergson
                        </Text>
                        <Text
                          className="text-gray-600 text-right text-sm w-auto"
                          size="txtInterRegular14"
                        >
                          Justin@gmail.com
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-5 w-5"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </header>
              <Line className="bg-indigo-50 h-px w-full" />
            </div>
            <div className="flex flex-col gap-5 items-center justify-start w-[98%] md:w-full">
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start outline outline-[0.5px] outline-blue_gray-50_01 p-4 rounded-[14px] w-[62%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[766px] w-full">
                      <Text
                        className="text-gray-900_01 text-lg w-auto"
                        size="txtPlusJakartaSansSemiBold18"
                      >
                        Sales Trends
                      </Text>
                      <div className="flex flex-row gap-2.5 h-[37px] md:h-auto items-center justify-start w-auto">
                        <Text
                          className="text-blue_gray-800 text-sm w-auto"
                          size="txtPlusJakartaSansMedium14"
                        >
                          Short by :{" "}
                        </Text>
                        <SelectBox
                          className="bg-white-A700 border border-gray-300_02 border-solid px-3 py-1.5 rounded-[16px] text-blue_gray-800 text-left text-xs w-[57%] sm:w-full"
                          placeholderClassName="text-blue_gray-800"
                          indicator={
                            <Img
                              className="h-5 w-5"
                              src="images/img_arrowdown_black_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="formfilter"
                          options={formfilterOptionsList}
                          isSearchable={false}
                          placeholder="Weekly"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between mt-4 w-full">
                      <div className="flex flex-col gap-5 h-[255px] md:h-auto items-start justify-between w-auto">
                        <Text
                          className="text-blue_gray-700 text-xs w-auto"
                          size="txtPlusJakartaSansSemiBold12"
                        >
                          50.000
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-xs w-auto"
                          size="txtPlusJakartaSansSemiBold12"
                        >
                          40.000
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-xs w-auto"
                          size="txtPlusJakartaSansSemiBold12"
                        >
                          30.000
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-xs w-auto"
                          size="txtPlusJakartaSansSemiBold12"
                        >
                          20.000
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-xs w-auto"
                          size="txtPlusJakartaSansSemiBold12"
                        >
                          10.000
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-xs w-full"
                          size="txtPlusJakartaSansSemiBold12"
                        >
                          5.000
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-center text-xs w-auto"
                          size="txtPlusJakartaSansSemiBold12"
                        >
                          0
                        </Text>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 flex-col font-inter h-[255px] items-center justify-start pt-1 w-[91%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group1.svg')",
                        }}
                      >
                        <div className="flex flex-col justify-start w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[31px] items-center justify-start md:ml-[0] ml-[278px] p-[5px] shadow-bs"
                            style={{
                              backgroundImage: "url('images/img_topsale.svg')",
                            }}
                          >
                            <Text
                              className="mb-1.5 text-white-A700 text-xs"
                              size="txtInterMedium12"
                            >
                              $45.000
                            </Text>
                          </div>
                          <Img
                            className="h-[216px] mt-[3px] w-[696px]"
                            src="images/img_bar.svg"
                            alt="bar"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-start max-w-[696px] md:ml-[0] ml-[70px] mt-3 w-full">
                      <Text
                        className="flex-1 text-blue_gray-700 text-center text-sm w-auto"
                        size="txtPlusJakartaSansSemiBold14"
                      >
                        Jan
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-700 text-center text-sm w-auto"
                        size="txtPlusJakartaSansSemiBold14"
                      >
                        Feb
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-700 text-center text-sm w-auto"
                        size="txtPlusJakartaSansSemiBold14"
                      >
                        Mar
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-700 text-center text-sm w-auto"
                        size="txtPlusJakartaSansSemiBold14"
                      >
                        Apr
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-700 text-center text-sm w-auto"
                        size="txtPlusJakartaSansSemiBold14"
                      >
                        Mei
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-700 text-center text-sm w-auto"
                        size="txtPlusJakartaSansSemiBold14"
                      >
                        Jun
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-700 text-center text-sm"
                        size="txtPlusJakartaSansSemiBold14"
                      >
                        Jul
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-700 text-center text-sm w-auto"
                        size="txtPlusJakartaSansSemiBold14"
                      >
                        Aug
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-700 text-center text-sm w-auto"
                        size="txtPlusJakartaSansSemiBold14"
                      >
                        Sep
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-700 text-center text-sm w-auto"
                        size="txtPlusJakartaSansSemiBold14"
                      >
                        Okt
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-700 text-center text-sm w-auto"
                        size="txtPlusJakartaSansSemiBold14"
                      >
                        Nov
                      </Text>
                      <Text
                        className="flex-1 text-blue_gray-700 text-center text-sm w-auto"
                        size="txtPlusJakartaSansSemiBold14"
                      >
                        Des
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[38%] md:w-full">
                  <div className="gap-4 sm:gap-5 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[14px] w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                        <Img
                          className="h-10 md:h-auto object-cover w-[207px]"
                          src="images/img_frame1000003203.png"
                          alt="frame1000003203"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-400 text-lg w-auto"
                            size="txtPlusJakartaSansMedium18"
                          >
                            Total Order
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                            size="txtPlusJakartaSansSemiBold24"
                          >
                            350
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                          <Button
                            className="bg-teal-300_1e cursor-pointer flex items-center justify-center min-w-[70px] px-2 py-1 rounded-[12px]"
                            leftIcon={
                              <Img
                                className="h-3 mt-px mb-[3px] mr-1"
                                src="images/img_trendingup.svg"
                                alt="trending-up"
                              />
                            }
                          >
                            <div className="font-medium font-plusjakartasans text-left text-teal-300 text-xs">
                              23,5%
                            </div>
                          </Button>
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtInterRegular14Gray700"
                          >
                            vs. previous month
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[14px] w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                        <Img
                          className="h-10 md:h-auto object-cover w-[207px]"
                          src="images/img_frame1000003203_red_400.png"
                          alt="frame1000003203"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-400 text-lg w-auto"
                            size="txtPlusJakartaSansMedium18"
                          >
                            Total Refund
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                            size="txtPlusJakartaSansSemiBold24"
                          >
                            270
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                          <Button
                            className="bg-red-400_1e cursor-pointer flex items-center justify-center min-w-[70px] px-2 py-1 rounded-[12px]"
                            leftIcon={
                              <Img
                                className="h-3 mt-px mb-[3px] mr-1"
                                src="images/img_trendingup_red_400.svg"
                                alt="trending-up"
                              />
                            }
                          >
                            <div className="font-medium font-plusjakartasans text-left text-red-400 text-xs">
                              23,5%
                            </div>
                          </Button>
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtInterRegular14Gray700"
                          >
                            vs. previous month
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[14px] w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                        <Img
                          className="h-10 md:h-auto object-cover w-[207px]"
                          src="images/img_frame1000003203_red_400_40x207.png"
                          alt="frame1000003203"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-400 text-lg w-auto"
                            size="txtPlusJakartaSansMedium18"
                          >
                            Average Sales
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                            size="txtPlusJakartaSansSemiBold24"
                          >
                            1567
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                          <Button
                            className="bg-red-400_1e cursor-pointer flex items-center justify-center min-w-[70px] px-2 py-1 rounded-[12px]"
                            leftIcon={
                              <Img
                                className="h-3 mt-px mb-[3px] mr-1"
                                src="images/img_trendingup_red_400.svg"
                                alt="trending-up"
                              />
                            }
                          >
                            <div className="font-medium font-plusjakartasans text-left text-red-400 text-xs">
                              23,5%
                            </div>
                          </Button>
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtInterRegular14Gray700"
                          >
                            vs. previous month
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[14px] w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                        <Img
                          className="h-10 md:h-auto object-cover w-[207px]"
                          src="images/img_frame1000003203_green_400.png"
                          alt="frame1000003203"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-400 text-lg w-auto"
                            size="txtPlusJakartaSansMedium18"
                          >
                            Total Income
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                            size="txtPlusJakartaSansSemiBold24"
                          >
                            $350.000
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                          <Button
                            className="bg-teal-300_1e cursor-pointer flex items-center justify-center min-w-[70px] px-2 py-1 rounded-[12px]"
                            leftIcon={
                              <Img
                                className="h-3 mt-px mb-[3px] mr-1"
                                src="images/img_trendingup.svg"
                                alt="trending-up"
                              />
                            }
                          >
                            <div className="font-medium font-plusjakartasans text-left text-teal-300 text-xs">
                              23,5%
                            </div>
                          </Button>
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtInterRegular14Gray700"
                          >
                            vs. previous month
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[26px] items-start justify-between w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[120px] outline outline-[0.5px] outline-blue_gray-50_01 p-[18px] rounded-[14px] w-[62%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[766px] w-full">
                    <Text
                      className="text-gray-900_01 text-lg w-auto"
                      size="txtPlusJakartaSansSemiBold18"
                    >
                      Last Orders
                    </Text>
                    <a
                      href="javascript:"
                      className="text-center text-lg text-teal-300 w-auto"
                    >
                      <Text size="txtPlusJakartaSansMedium18Teal300">
                        See All
                      </Text>
                    </a>
                  </div>
                  <div className="flex flex-row items-start justify-between max-w-[766px] mt-3.5 w-full">
                    <Text
                      className="text-base text-blue_gray-300 w-auto"
                      size="txtPlusJakartaSansMedium16"
                    >
                      Name
                    </Text>
                    <Text
                      className="text-base text-blue_gray-300 w-auto"
                      size="txtPlusJakartaSansMedium16"
                    >
                      Date
                    </Text>
                    <Text
                      className="text-base text-blue_gray-300 w-auto"
                      size="txtPlusJakartaSansMedium16"
                    >
                      Amount
                    </Text>
                    <Text
                      className="text-base text-blue_gray-300 w-auto"
                      size="txtPlusJakartaSansMedium16"
                    >
                      Status
                    </Text>
                    <Text
                      className="text-base text-blue_gray-300 w-auto"
                      size="txtPlusJakartaSansMedium16"
                    >
                      Invoice
                    </Text>
                  </div>
                  <List
                    className="flex flex-col gap-4 items-start mb-[13px] mt-5 w-auto"
                    orientation="vertical"
                  >
                    <div className="flex flex-col gap-3 items-start justify-start max-w-[766px] w-full">
                      <Line className="bg-blue_gray-50_02 h-px w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <div className="flex flex-col items-center justify-start w-[216px]">
                          <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                            <Img
                              className="h-8 md:h-auto rounded-[50%] w-8"
                              src="images/img_frame1000003208.png"
                              alt="frame1000003208"
                            />
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtPlusJakartaSansMedium16Bluegray800"
                            >
                              Marcus Bergson
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="text-base text-gray-600_01 w-auto"
                          size="txtPlusJakartaSansRegular16"
                        >
                          Nov 15, 2023
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtPlusJakartaSansMedium16Gray900"
                        >
                          $80,000
                        </Text>
                        <Text
                          className="text-base text-teal-300 w-auto"
                          size="txtPlusJakartaSansRegular16Teal300"
                        >
                          Paid
                        </Text>
                        <div className="flex flex-row gap-1.5 items-center justify-start w-20">
                          <Img
                            className="h-4 w-4"
                            src="images/img_documentdownload.svg"
                            alt="documentdownloa"
                          />
                          <Text
                            className="text-gray-900 text-sm w-auto"
                            size="txtPlusJakartaSansRegular14"
                          >
                            View
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start max-w-[766px] w-full">
                      <Line className="bg-blue_gray-50_02 h-px w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <div className="flex flex-col items-center justify-start w-[216px]">
                          <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                            <Img
                              className="h-8 md:h-auto rounded-[50%] w-8"
                              src="images/img_frame1000003208_32x32.png"
                              alt="frame1000003208"
                            />
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtPlusJakartaSansMedium16Bluegray800"
                            >
                              Jaydon Vaccaro
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="text-base text-gray-600_01 w-auto"
                          size="txtPlusJakartaSansRegular16"
                        >
                          Nov 15, 2023
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtPlusJakartaSansMedium16Gray900"
                        >
                          $150,000
                        </Text>
                        <Text
                          className="text-base text-red-400 w-auto"
                          size="txtPlusJakartaSansRegular16Red400"
                        >
                          Refund
                        </Text>
                        <div className="flex flex-row gap-1.5 items-center justify-start w-20">
                          <Img
                            className="h-4 w-4"
                            src="images/img_documentdownload.svg"
                            alt="documentdownloa"
                          />
                          <Text
                            className="text-gray-900 text-sm w-auto"
                            size="txtPlusJakartaSansRegular14"
                          >
                            View
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start max-w-[766px] w-full">
                      <Line className="bg-blue_gray-50_02 h-px w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <div className="flex flex-col items-center justify-start w-[216px]">
                          <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                            <Img
                              className="h-8 md:h-auto rounded-[50%] w-8"
                              src="images/img_frame1000003208_1.png"
                              alt="frame1000003208"
                            />
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtPlusJakartaSansMedium16Bluegray800"
                            >
                              Corey Schleifer
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="text-base text-gray-600_01 w-auto"
                          size="txtPlusJakartaSansRegular16"
                        >
                          Nov 14, 2023
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtPlusJakartaSansMedium16Gray900"
                        >
                          $87,000
                        </Text>
                        <Text
                          className="text-base text-teal-300 w-auto"
                          size="txtPlusJakartaSansRegular16Teal300"
                        >
                          Paid
                        </Text>
                        <div className="flex flex-row gap-1.5 items-center justify-start w-20">
                          <Img
                            className="h-4 w-4"
                            src="images/img_documentdownload.svg"
                            alt="documentdownloa"
                          />
                          <Text
                            className="text-gray-900 text-sm w-auto"
                            size="txtPlusJakartaSansRegular14"
                          >
                            View
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start max-w-[766px] w-full">
                      <Line className="bg-blue_gray-50_02 h-px w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <div className="flex flex-col items-center justify-start w-[216px]">
                          <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                            <Img
                              className="h-8 md:h-auto rounded-[50%] w-8"
                              src="images/img_frame1000003208_2.png"
                              alt="frame1000003208"
                            />
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtPlusJakartaSansMedium16Bluegray800"
                            >
                              Cooper Press
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="text-base text-gray-600_01 w-auto"
                          size="txtPlusJakartaSansRegular16"
                        >
                          Nov 14, 2023
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtPlusJakartaSansMedium16Gray900"
                        >
                          $100,000
                        </Text>
                        <Text
                          className="text-base text-red-400 w-auto"
                          size="txtPlusJakartaSansRegular16Red400"
                        >
                          Refund
                        </Text>
                        <div className="flex flex-row gap-1.5 items-center justify-start w-20">
                          <Img
                            className="h-4 w-4"
                            src="images/img_documentdownload.svg"
                            alt="documentdownloa"
                          />
                          <Text
                            className="text-gray-900 text-sm w-auto"
                            size="txtPlusJakartaSansRegular14"
                          >
                            View
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start max-w-[766px] w-full">
                      <Line className="bg-blue_gray-50_02 h-px w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start w-[216px]">
                          <Img
                            className="h-8 md:h-auto rounded-[50%] w-8"
                            src="images/img_frame1000003208_3.png"
                            alt="frame1000003208"
                          />
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtPlusJakartaSansMedium16Bluegray800"
                            >
                              Phillip Lubin
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="text-base text-gray-600_01 w-auto"
                          size="txtPlusJakartaSansRegular16"
                        >
                          Nov 13, 2023
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtPlusJakartaSansMedium16Gray900"
                        >
                          $78,000
                        </Text>
                        <Text
                          className="text-base text-teal-300 w-auto"
                          size="txtPlusJakartaSansRegular16Teal300"
                        >
                          Paid
                        </Text>
                        <div className="flex flex-row gap-1.5 items-center justify-start w-20">
                          <Img
                            className="h-4 w-4"
                            src="images/img_documentdownload.svg"
                            alt="documentdownloa"
                          />
                          <Text
                            className="text-gray-900 text-sm w-auto"
                            size="txtPlusJakartaSansRegular14"
                          >
                            View
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-5 items-center justify-start p-4 rounded-lg w-[37%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-[452px] sm:w-full">
                    <Text
                      className="text-gray-900_01 text-lg w-auto"
                      size="txtPlusJakartaSansSemiBold18"
                    >
                      Top Platform
                    </Text>
                    <a
                      href="javascript:"
                      className="text-center text-lg text-teal-300 w-auto"
                    >
                      <Text size="txtPlusJakartaSansMedium18Teal300">
                        See All
                      </Text>
                    </a>
                  </div>
                  <List
                    className="flex flex-col gap-5 items-start mb-4 w-[452px] md:w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-gray-900_02 text-lg"
                        size="txtPlusJakartaSansSemiBold18Gray90002"
                      >
                        Book Bazaar
                      </Text>
                      <div className="h-3 mt-[18px] overflow-hidden relative w-full">
                        <div className="w-full h-full absolute bg-gray_100 rounded-[6px]"></div>
                        <div
                          className="h-full absolute bg-indigo_400  rounded-[6px]"
                          style={{ width: "54%" }}
                        ></div>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-between mt-4 w-[452px] sm:w-full">
                        <Text
                          className="text-blue_gray-700 text-lg w-auto"
                          size="txtPlusJakartaSansRegular18"
                        >
                          {" "}
                          $2,500,000
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-lg w-auto"
                          size="txtPlusJakartaSansRegular18"
                        >
                          +15%
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-gray-900_02 text-lg"
                        size="txtPlusJakartaSansSemiBold18Gray90002"
                      >
                        Artisan Aisle
                      </Text>
                      <div className="h-3 mt-[18px] overflow-hidden relative w-full">
                        <div className="w-full h-full absolute bg-gray_100 rounded-[6px]"></div>
                        <div
                          className="h-full absolute bg-light_blue_300  rounded-[6px]"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-between mt-4 w-[452px] sm:w-full">
                        <Text
                          className="text-blue_gray-700 text-lg w-auto"
                          size="txtPlusJakartaSansRegular18"
                        >
                          $1,800,000
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-lg w-auto"
                          size="txtPlusJakartaSansRegular18"
                        >
                          +10%
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-gray-900_02 text-lg"
                        size="txtPlusJakartaSansSemiBold18Gray90002"
                      >
                        Toy Troop
                      </Text>
                      <div className="h-3 overflow-hidden relative w-full">
                        <div className="w-full h-full absolute bg-gray_100 rounded-[6px]"></div>
                        <div
                          className="h-full absolute bg-orange_300  rounded-[6px]"
                          style={{ width: "27%" }}
                        ></div>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-between w-[451px] sm:w-full">
                        <Text
                          className="text-blue_gray-700 text-lg w-auto"
                          size="txtPlusJakartaSansRegular18"
                        >
                          $1,200,000
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-lg w-auto"
                          size="txtPlusJakartaSansRegular18"
                        >
                          +8%
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-gray-900_02 text-lg"
                        size="txtPlusJakartaSansSemiBold18Gray90002"
                      >
                        XStore
                      </Text>
                      <div className="h-3 mt-[18px] overflow-hidden relative w-full">
                        <div className="w-full h-full absolute bg-gray_100 rounded-[6px]"></div>
                        <div
                          className="h-full absolute bg-red_A200  rounded-[6px]"
                          style={{ width: "27%" }}
                        ></div>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-between mt-4 w-[451px] sm:w-full">
                        <Text
                          className="text-blue_gray-700 text-lg w-auto"
                          size="txtPlusJakartaSansRegular18"
                        >
                          $600,000
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-lg w-auto"
                          size="txtPlusJakartaSansRegular18"
                        >
                          +5%
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
