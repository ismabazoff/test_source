(function () {
	function addToCartHanlder() {
		var $btns = $("[data-add-to-cart]");

		$btns.on("click", function (e) {
			e.preventDefault();

			$.ajax({
				//random нужен чтобы не кэшировался запрос
				url: "./fakedata/cartResponse.json?random=" + Math.random(),
				type: "GET",
				dataType: "json",
				success: res => {
					if (res.success) {
						$(e.target)
							.text("Добавлено")
							.removeClass("btn-primary")
							.addClass("btn-success");
						$("[data-cart-count]").text(res.count);
					}
				}
			});
		});
	}

	function main() {
		addToCartHanlder();
	}

	main();
})();
