const Switch = () => {
	return (
		<label className="relative flex w-10 h-6 rounded-[32px] shadow-md max-xl:w-9 max-xl:h-5">
			<input type="checkbox" className="opacity-0 w-0 h-0 peer/switch" />

			<span className="rounded-[32px] absolute cursor-pointer inset-0 m-auto bg-custom-gray transition before:rounded-[32px] before:absolute before:my-auto before:top-0 before:bottom-0 before:left-0.5 before:content:[''] before:w-5 before:h-5 before:bg-custom-white before:transition peer-checked/switch:before:translate-x-4 peer-checked/switch:bg-custom-blue-dark max-xl:before:w-4 max-xl:before:h-4"></span>
		</label>
	);
};

export default Switch;
