
import { AccountCard } from "./AccountCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { AccountsSliderNavigation } from "./AccountsSliderNavigation";
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { useAccountsController } from "./useAccountsController";

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth
  } = useAccountsController()

  return (
    <div className="bg-teal-900 rounded-2xl h-full w-full md:p-10 px-4 py-8 flex flex-col">
      <div className="">
        <span className="tracking-[-1px] text-white block">
          Saldo total
        </span>

        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            R$ 1000,00
          </strong>

          <button className="w-8 h-8 flex items-center justify-center">
            <EyeIcon open={true} />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
            onSlideChange={({ isBeginning, isEnd }) =>
              setSliderState({
                isBeginning,
                isEnd
              })
            }
          >
            <div className="flex items-center justify-between mb-4" slot="container-start">
              <strong className="text-white tracking-[-1px] text-lg font-bold">
                Minhas contas
              </strong>

              <AccountsSliderNavigation
                isBeginning={sliderState.isBeginning}
                isEnd={sliderState.isEnd}
              />
            </div>

            <SwiperSlide>
              <AccountCard
                color={"#7950F2"}
                name={"Nubank"}
                balance={1000}
                type={"CASH"}
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccountCard
              color={"#333"}
              name={"XP"}
              balance={1000}
              type={"INVESTMENT"}
            />
           </SwiperSlide>

            <SwiperSlide>
              <AccountCard
                color={"#333"}
                name={"Carteira"}
                balance={1000}
                type={"CHECKING"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
