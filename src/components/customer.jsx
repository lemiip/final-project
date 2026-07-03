import { HiOutlineEnvelope, HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { publicUrl } from "../lib/publicUrl";

function CustomerService() {
    return (
        <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-16">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:gap-14">
                <div className="max-w-xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                        Customer Service
                    </h2>

                    <div className="mt-7 border-y border-gray-200 py-5 sm:mt-9">
                        <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
                            Email Address
                        </p>
                        <a
                            href="mailto:oycs.global@cj.net"
                            className="mt-2 flex min-w-0 items-center gap-3 text-base font-semibold text-black hover:text-lime-700 sm:text-lg"
                        >
                            <HiOutlineEnvelope className="h-5 w-5 shrink-0 text-lime-600" />
                            <span className="break-all">oycs.global@cj.net</span>
                        </a>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <a
                            href="#/contact"
                            className="flex min-h-12 w-full items-center justify-center gap-2 rounded border border-lime-500 px-4 text-base font-bold text-emerald-900 transition hover:bg-lime-100 sm:min-h-[50px]"
                        >
                            <HiOutlineEnvelope className="h-5 w-5" />
                            Contact Us
                        </a>

                        <a
                            href="#/faq"
                            className="flex min-h-12 w-full items-center justify-center gap-2 rounded border border-lime-500 px-4 text-base font-bold text-emerald-900 transition hover:bg-lime-100 sm:min-h-[50px]"
                        >
                            <HiOutlineQuestionMarkCircle className="h-5 w-5" />
                            FAQs
                        </a>
                    </div>
                </div>

                <div className="overflow-hidden rounded bg-gray-50">
                    <img
                        src={publicUrl("/bannerimg/dummy-main-customer.png")}
                        alt="Customer service"
                        className="h-[220px] w-full object-cover sm:h-[300px] lg:h-[340px]"
                    />
                </div>
            </div>
        </section>
    );
}

export default CustomerService;
