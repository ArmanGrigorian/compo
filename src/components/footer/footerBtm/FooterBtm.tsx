const FooterBtm = () => {
	return (
		<div className="flex flex-col gap-10 py-12">
			<ul className="flex justify-center items-center gap-7 max-lg:flex-col">
				<li className="flex items-center gap-2 hover:opacity-80 active:scale-95">
					<img src="/icons/blank.png" alt="blank icon png" />
					<a
						href="#"
						className="text-custom-grey-blue text-base font-gotham-medium max-xl:text-sm max-sm:text-xs">
						PDF презентация
					</a>
				</li>

				<li className="flex items-center gap-2 hover:opacity-80 active:scale-95">
					<img src="/icons/camera.png" alt="camera icon png" />
					<a
						href="#"
						className="text-custom-grey-blue text-base font-gotham-medium max-xl:text-sm max-sm:text-xs">
						Видео инструкция
					</a>
				</li>

				<li className="flex items-center gap-2 hover:opacity-80 active:scale-95">
					<img src="/icons/attention.png" alt="attention icon png" />
					<a
						href="#"
						className="text-custom-grey-blue text-base font-gotham-medium max-xl:text-sm max-sm:text-xs">
						FAQ
					</a>
				</li>

				<li className="flex items-center gap-2 hover:opacity-80 active:scale-95">
					<img src="/icons/youtube.png" alt="youtube icon png" />
					<a
						href="https://www.youtube.com"
						className="text-custom-blue-dark text-base font-gotham-medium max-xl:text-sm max-sm:text-xs">
						Мы на YouTube
					</a>
				</li>

				<li className="hover:opacity-80 active:scale-95">
					<a
						href="#"
						className="text-custom-grey-blue text-base font-gotham-medium max-xl:text-sm max-sm:text-xs">
						Политика конфиденциальности{" "}
					</a>
				</li>
			</ul>

			<p className="text-center">
				<small className="text-custom-grey-blue text-xs font-gotham-normal">
					Настоящая Политика обработки персональных данных разработана в соответствии с Конституцией
					Российской Федерации, Трудовым кодексом Российской Федерации, Гражданским кодексом
					Российской Федерации, Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации,
					информационных технологиях и о защите информации",
				</small>
			</p>

			<a
				href="#"
				className="flex justify-center items-center gap-6 hover:opacity-80 active:scale-95">
				<img src="/icons/colorLessLogo.png" alt="compo logo png" />
				<span className="text-custom-grey-blue text-sm font-gotham-bold">Разработка платформы</span>
			</a>
		</div>
	);
};

export default FooterBtm;
