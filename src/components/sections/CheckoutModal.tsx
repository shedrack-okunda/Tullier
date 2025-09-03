import React, { useState } from "react";

export interface CheckoutDetails {
	name: string;
	address: string;
	phone: string;
}

interface CheckoutModalProps {
	bookTitle: string;
	price: string;
	onClose: () => void;
	onComplete: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
	bookTitle,
	price,
	onClose,
	onComplete,
}) => {
	const [step, setStep] = useState<
		"details" | "payment" | "waiting" | "done"
	>("details");
	const [details, setDetails] = useState<CheckoutDetails>({
		name: "",
		address: "",
		phone: "",
	});

	const handleDetailsSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setStep("payment");
	};

	const handlePaymentProceed = (e: React.FormEvent) => {
		e.preventDefault();
		setStep("waiting");
		setTimeout(() => {
			setStep("done");
			setTimeout(() => {
				onComplete();
				onClose();
			}, 1500);
		}, 3000); // Simulate waiting for Mpesa confirmation
	};

	return (
		<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
			<div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full relative">
				<button
					className="absolute top-4 right-4 text-orange-600 text-xl font-bold"
					onClick={onClose}>
					×
				</button>
				{step === "details" && (
					<form onSubmit={handleDetailsSubmit} className="space-y-4">
						<h2 className="text-2xl font-bold text-amber-900 mb-2">
							Shipping Details
						</h2>
						<div>
							<label className="block text-amber-800 mb-1">
								Full Name
							</label>
							<input
								type="text"
								required
								className="w-full border rounded px-3 py-2"
								value={details.name}
								onChange={(e) =>
									setDetails({
										...details,
										name: e.target.value,
									})
								}
							/>
						</div>
						<div>
							<label className="block text-amber-800 mb-1">
								Address
							</label>
							<input
								type="text"
								required
								className="w-full border rounded px-3 py-2"
								value={details.address}
								onChange={(e) =>
									setDetails({
										...details,
										address: e.target.value,
									})
								}
							/>
						</div>
						<div>
							<label className="block text-amber-800 mb-1">
								Phone Number
							</label>
							<input
								type="tel"
								required
								className="w-full border rounded px-3 py-2"
								value={details.phone}
								onChange={(e) =>
									setDetails({
										...details,
										phone: e.target.value,
									})
								}
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
							Continue to Payment
						</button>
					</form>
				)}
				{step === "payment" && (
					<form onSubmit={handlePaymentProceed} className="space-y-4">
						<h2 className="text-2xl font-bold text-amber-900 mb-2">
							Mpesa Payment
						</h2>
						<p className="text-amber-700 mb-2">
							Amount:{" "}
							<span className="font-bold text-orange-600">
								{price}
							</span>
						</p>
						<p className="text-amber-700 mb-4">
							We have sent a payment prompt to your phone. Please
							enter your Mpesa PIN on your device to complete the
							transaction.
						</p>
						<button
							type="submit"
							className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
							Waiting for Payment...
						</button>
					</form>
				)}
				{step === "waiting" && (
					<div className="text-center py-8">
						<h2 className="text-2xl font-bold text-amber-900 mb-2">
							Waiting for Payment Confirmation...
						</h2>
						<p className="text-amber-700 mb-4">
							Please enter your Mpesa PIN on your phone to
							complete the payment.
						</p>
						<div className="flex justify-center items-center">
							<svg
								className="animate-spin h-8 w-8 text-orange-600"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24">
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8v8H4z"></path>
							</svg>
						</div>
					</div>
				)}
				{step === "done" && (
					<div className="text-center py-8">
						<h2 className="text-2xl font-bold text-amber-900 mb-2">
							Payment Successful!
						</h2>
						<p className="text-amber-700 mb-4">
							Your order for{" "}
							<span className="font-bold">{bookTitle}</span> will
							be shipped soon.
						</p>
						<p className="text-orange-600">
							Redirecting to home...
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default CheckoutModal;
