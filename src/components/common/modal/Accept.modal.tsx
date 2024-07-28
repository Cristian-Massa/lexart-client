import { ModalInterface } from "../../../interfaces/common/modal.interface";
import { modalStore } from "../../../store/store";
import CreateForm from "../../products/CreateForm.products";
import ActionButton from "../buttons/ActionButton";
export default function Accept({
  message,
  active,
  isLoading,
  petitionConfig,
  createForm,
  onClick
}: ModalInterface) {
  const { switchModal } = modalStore();
  return (
    <div
      className={`absolute h-screen w-screen flex justify-center items-center top-0 bottom-0 right-0 left-0 bg-opacity-70 bg-black z-30 ${
        active ? "" : "hidden"
      } transition-all duration-100 `}
    >
      <div
        className={`${
          active ? "" : "hidden"
        } transition-all duration-100 bg-white h-[400px] w-[400px] rounded-lg flex flex-col justify-center items-center gap-20`}
      >
        <div>
          <p>{message}</p>
        </div>
        {
          createForm ?
          <CreateForm 
            // isLoading={isLoading}
          />
          :
          <div className="relative z-50 grid">
          <div className="flex gap-4">
            <ActionButton
              label="Aceptar"
              color="bg-green-600"
              // disablied={isLoading}
              onClick={() => {
                if (petitionConfig && onClick) {
                  onClick(petitionConfig);
                }
              }}
            />
            <ActionButton
              label="Denegar"
              color="bg-red-600"
              onClick={() => {
                switchModal();
              }}
              // disablied={isLoading}
            />
          </div>
          <div className="flex justify-center pt-4">
            {isLoading ? (
              <svg
                className='animate-spin '
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M20.9423 3.05768C23.4117 5.52701 21.4099 11.5324 16.4712 16.4711C11.5326 21.4097 5.5272 23.4115 3.05787 20.9422C0.588547 18.4728 2.59033 12.4675 7.52899 7.5288C12.4676 2.59014 18.473 0.588345 20.9423 3.05768ZM3.05768 3.05782C0.588349 5.52715 2.59013 11.5325 7.52879 16.4712C12.4674 21.4099 18.4728 23.4117 20.9421 20.9423C23.4115 18.473 21.4097 12.4676 16.471 7.52894C11.5324 2.59028 5.527 0.588485 3.05768 3.05782Z"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                  />{" "}
                  <path
                    d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                  />{" "}
                </g>
              </svg>
            ) : (
              <svg
                className="stroke-white"
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M20.9423 3.05768C23.4117 5.52701 21.4099 11.5324 16.4712 16.4711C11.5326 21.4097 5.5272 23.4115 3.05787 20.9422C0.588547 18.4728 2.59033 12.4675 7.52899 7.5288C12.4676 2.59014 18.473 0.588345 20.9423 3.05768ZM3.05768 3.05782C0.588349 5.52715 2.59013 11.5325 7.52879 16.4712C12.4674 21.4099 18.4728 23.4117 20.9421 20.9423C23.4115 18.473 21.4097 12.4676 16.471 7.52894C11.5324 2.59028 5.527 0.588485 3.05768 3.05782Z"
                    strokeWidth="1.5"
                  />{" "}
                  <path
                    d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
                    strokeWidth="1.5"
                  />{" "}
                </g>
              </svg>
            )}
          </div>
        </div>
        }
      </div>
    </div>
  );
}
