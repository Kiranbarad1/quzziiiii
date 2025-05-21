import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // --- Quiz Data ---
  const quizData = [
    {
      question:
        "Which of the following is prohibited as per the AMFI Code of Ethics?",
      options: [
        "A) Inter-Scheme transfer of securities",
        "B) Front running in those securities in which the mutual fund is dealing",
        "C) Transaction in securities through associated brokers",
        "D) Distribution of mutual fund schemes through Sponsor or its associates",
      ],
      answer:
        "B) Front running in those securities in which the mutual fund is dealing",
    },
    {
      question:
        "Identify the true statement(s) with respect to stamping of application for Non Financial transactions of a mutual fund.",
      options: [
        "A) Time stamping is relevant",
        "B) Date stamping is pertinent",
        "C) Date and Time stamping is done",
        "D) All A, B and C are true",
      ],
      answer: "All A, B and C are true",
    },
    {
      question:
        "Identify the TRUE statement with respect to benchmark for Gold ETFs.",
      options: [
        "A) CRISIL Gilt fund index is widely used as a benchmark for Gold ETFs",
        "B) Gold ETFs are benchmarked against gold prices",
        "C) There can be no benchmark for Gold ETFs",
        "D) Internationally it is proven that there is no need of any type of benchmark for Gold ETFs",
      ],
      answer: "B) Gold ETFs are benchmarked against gold prices",
    },
    {
      question: "Can Indian mutual funds invest in Real Estate?",
      options: ["A) Yes", "B) No"],
      answer: "A) Yes",
    },
    {
      question:
        "With respect to the procedure for getting empanelled as a mutual fund distributor with an AMC, the applicant needs to sign a declaration for:",
      options: [
        "A) Guarantee of adding a minimum of 5 investors every month",
        "B) Declaring the rebates given back to the investors",
        "C) Ensuring that all employees who are selling mutual funds will have more than one ARN code",
        "D) Commitment to abide by statutory codes, guidelines and circulars",
      ],
      answer:
        "D) Commitment to abide by statutory codes, guidelines and circulars",
    },
    {
      question: "Once the mutual fund units are pledged, the unit holder/s:",
      options: [
        "A) Cannot sell the units",
        "B) Can sell the units but after a period of 3 months",
        "C) Cannot sell the units but can switch the units to another scheme",
        "D) Cannot do additional purchase in the same account",
      ],
      answer: "A) Cannot sell the units",
    },
    {
      question:
        "On whom is the compliance requirement under Foreign Account Tax Compliance Act (FATCA) applicable?",
      options: [
        "A) Only on those mutual funds who have foreign institutions as their sponsors",
        "B) Only on those mutual funds who are registered with a foreign agency",
        "C) All financial institutions including mutual funds",
        "D) Only Indian mutual funds",
      ],
      answer: "C) All financial institutions including mutual funds",
    },
    {
      question:
        "Which entity processes the purchase and redemption transactions of investors of an open-ended fund?",
      options: [
        "A) The Custodian",
        "B) The Broker / Mutual Fund Agent",
        "C) AMFI",
        "D) RTA",
      ],
      answer: "D) RTA",
    },
    {
      question:
        "Unitholders have the right to inspect key document/s with respect to their mutual fund investments, including:",
      options: [
        "A) Memorandum & Articles of Association",
        "B) RTA agreement",
        "C) Custodial Services Agreement",
        "D) All of the above",
      ],
      answer: "D) All of the above",
    },
    {
      question:
        "The Key Information Memorandum is attached to which of these documents?",
      options: [
        "A) The Application Form",
        "B) The Scheme Information Document (SID)",
        "C) The Statement of Additional Information (SAI)",
        "D) The Transaction Slip",
      ],
      answer: "A) The Application Form",
    },
    {
      question:
        "Unitholders have the right to inspect key document/s with respect to their mutual fund investments. Which of the following documents can they inspect?",
      options: [
        "A) Memorandum & Articles of Association",
        "B) RTA agreement",
        "C) Custodial Services Agreement",
        "D) All of the above",
      ],
      answer: "D) All of the above",
    },
    {
      question:
        "Identify the security which will be most impacted by interest rate movements in the economy?",
      options: [
        "A) Public Sector Units (PSU) Bonds",
        "B) Money Market securities",
        "C) Government securities",
        "D) Corporate debentures",
      ],
      answer: "C) Government securities",
    },
    {
      question:
        "Which of these expenses can be charged to a mutual fund scheme by the AMC?",
      options: [
        "A) Office salaries of fund management team",
        "B) Rent of the AMC registered office",
        "C) AMC general administration expenses",
        "D) Custodian and Fund Administrator fees",
      ],
      answer: "D) Custodian and Fund Administrator fees",
    },
    {
      question:
        "Identify the TRUE statement with respect to regulation of mutual funds in India.",
      options: [
        "A) AMFI along with SEBI regulates the mutual funds in India",
        "B) The two stock exchanges NSE and BSE regulate the open-end mutual fund schemes",
        "C) SEBI regulates the mutual funds in India",
        "D) RBI along with SEBI regulate the bank sponsored mutual funds in India",
      ],
      answer: "C) SEBI regulates the mutual funds in India",
    },
    {
      question:
        "Ms Shweta purchases through a distributor 5000 units of a mutual fund scheme at a NAV of Rs 30. The current NAV of the scheme is Rs 28. What will be the trail commission for today if the trail commission rate is 1% per annum?",
      options: [
        "A) Rs. 13.8356",
        "B) Rs. 7.2256",
        "C) Rs. 3.8356",
        "D) Rs. 26.7463",
      ],
      answer: "C) Rs. 3.8356",
    },
    {
      question: "Thematic funds are risky because of ___ in one theme.",
      options: [
        "A) under exposure",
        "B) high beta",
        "C) diversification",
        "D) concentration",
      ],
      answer: "D) concentration",
    },
    {
      question:
        "Mutual funds today are benchmarked to the Total Return variant of an Index (TRI) and not to Price Return variant of an Index (PRI). What is the advantage of TRI over PRI?",
      options: [
        "A) It ensures that the performance comparison is fair",
        "B) Increases transparency",
        "C) Only A",
        "D) Only B",
        "E) Both A and B",
      ],
      answer: "E) Both A and B",
    },
    {
      question:
        "What will happen to the scheme's Net Asset Value (NAV) after the dividend is paid?",
      options: [
        "A) The NAV will Rise",
        "B) The NAV will Fall",
        "C) The NAV will remain same",
      ],
      answer: "B) The NAV will Fall",
    },
    {
      question: "Identify the TRUE statement/s.",
      options: [
        "A) The Turnover Ratio will be higher in a momentum oriented investment strategy of an equity mutual fund.",
        "B) It's always simpler to invest in balanced mutual funds as compared to investing separately in equity and debt funds, but this limits choices.",
        "C) Only A is true",
        "D) Only B is true",
        "E) Both A and B are true",
        "F) Neither A nor B is true",
      ],
      answer: "E) Both A and B are true",
    },
    {
      question:
        "Who has to sign the form for registering a change in the default bank account in a mutual fund folio?",
      options: [
        "A) By all the holders of the folio",
        "B) By all the holders of the folio as per the mode of holding",
        "C) Only by the first holder of the folio",
      ],
      answer: "B) By all the holders of the folio as per the mode of holding",
    },
    {
      question:
        "___ is the most relevant factor for comparing performance of liquid funds of similar category offered by various mutual fund houses.",
      options: ["A) Expenses", "B) Maturity", "C) Current NAV", "D) Taxation"],
      answer: "A) Expenses",
    },
    {
      question:
        "Who can attest the copies of supporting documents in the KYC procedure?",
      options: [
        "A) Gazetted Officer",
        "B) Manager of a Scheduled Commercial Bank",
        "C) Both of the above",
        "D) Mutual Fund Distributor",
      ],
      answer: "C) Both of the above",
    },
    {
      question:
        "Tactical Asset Allocation is the decision that comes out of calls on the likely behaviour of the market - True or False?",
      options: ["A) False", "B) True"],
      answer: "B) True",
    },
    {
      question:
        "Who issues a due diligence certificate stating compliance with all legal formalities at the time of making a new offer of mutual fund units?",
      options: [
        "A) Board of Trustees",
        "B) AMC",
        "C) Compliance Officer",
        "D) Custodian",
      ],
      answer: "A) Board of Trustees",
    },
    {
      question:
        "The first Account Statement under SIP/STP shall be issued within 10 working days of the initial investment/transfer - State whether True or False?",
      options: ["A) True", "B) False"],
      answer: "A) True",
    },
    {
      question:
        "As per SEBI Code of Conduct, mutual fund schemes portfolios should be managed in the interest of:",
      options: [
        "A) Trustees",
        "B) Sponsors",
        "C) Brokers",
        "D) All classes of unit holders",
      ],
      answer: "D) All classes of unit holders",
    },
    {
      question:
        "Usually most investors might have invested across various asset categories. However, the problem with such asset allocation is that:",
      options: [
        "A) such asset allocation earns low returns",
        "B) such asset allocation is done without defining any objective or without any process",
        "C) such asset allocation increases the portfolio risk",
        "D) such asset allocation leads to payment of additional taxes",
      ],
      answer:
        "B) such asset allocation is done without defining any objective or without any process",
    },
    {
      question:
        "The Key Information Memorandum (KIM) is an abridged version of which of these documents?",
      options: [
        "A) The yearly statement of the portfolio of the fund",
        "B) The half yearly statement of the financial statement of the fund",
        "C) The annual accounts of the fund",
        "D) Scheme related documents SID and SAI",
      ],
      answer: "D) Scheme related documents SID and SAI",
    },
    {
      question:
        "The loss booked from a debt investment of 15 months can be set off against:",
      options: [
        "A) Long term capital loss",
        "B) Short term capital loss",
        "C) Short term capital gain or long term capital gain",
        "D) It cannot be set-off",
      ],
      answer: "C) Short term capital gain or long term capital gain",
    },
    {
      question:
        "The sponsor of a mutual fund can be compared to the Chief Executive of a company - State True or False?",
      options: ["A) True", "B) False"],
      answer: "B) False",
    },
    {
      question: "In case one of the joint holders dies, then the units will:",
      options: [
        "A) Be transferred to the HUF of deceased holder",
        "B) Be transferred to nominee/s",
        "C) Continue to be held by surviving joint holders",
        "D) Be redeemed automatically",
      ],
      answer: "C) Continue to be held by surviving joint holders",
    },
    {
      question:
        "Identify the factor which must be considered to determine the asset allocation for an investor?",
      options: [
        "A) Financial goals of the investor and his financial situation",
        "B) AUM of the scheme",
        "C) Scheme expenses",
        "D) Past performance of the scheme",
      ],
      answer: "A) Financial goals of the investor and his financial situation",
    },
    {
      question:
        "The Valuation Policy of a mutual fund is mentioned in which document?",
      options: [
        "A) Fund Factsheet",
        "B) Statement of Additional Information (SAI)",
        "C) Annual accounts of the AMC",
        "D) Addendum",
      ],
      answer: "B) Statement of Additional Information (SAI)",
    },
    {
      question:
        "In a Corporate Bond fund, the minimum investment in highest rated corporate bonds is percent of the total assets.",
      options: ["A) 50", "B) 60", "C) 70", "D) 80"],
      answer: "C) 70",
    },
    {
      question:
        "Which of these authorities uses the information collected under FATCA?",
      options: [
        "A) Foreign Government",
        "B) Indian Government",
        "C) Indian Tax Authorities",
        "D) All of the above",
      ],
      answer: "D) All of the above",
    },
    {
      question:
        "Once the New Fund Offer (NFO) of a Close Ended Fund has closed, a person can buy the listed units of such close ended fund:",
      options: [
        "A) At prices usually higher than NAV",
        "B) At prices usually lower than NAV",
        "C) At prices which can be higher or lower than NAV",
        "D) Units of a Close Ended Fund cannot be bought after NFO",
      ],
      answer: "C) At prices which can be higher or lower than NAV",
    },
    {
      question: "Identify the TRUE statement/s -",
      options: [
        "A) Time stamping is relevant only for Financial transactions and not for Non-Financial transactions",
        "B) Time stamping is relevant for both Financial and Non-Financial transactions",
        "C) Only A is true",
        "D) Only B is true",
        "E) Both A and B are true",
        "F) None of the above",
      ],
      answer:
        "B) Time stamping is relevant for both Financial and Non-Financial transactions",
    },
    {
      question:
        "Can an investor redeem any amount from a Segregated Portfolio? If Yes, then what are the restrictions?",
      options: [
        "A) There is no restriction on redemptions from a Segregated Portfolio",
        "B) Only 25% of the value of current investments can be redeemed from a Segregated Portfolio",
        "C) Only 50% of the value of current investments can be redeemed from a Segregated Portfolio",
        "D) An investor cannot redeem any amount from a Segregated Portfolio from the AMC",
      ],
      answer:
        "A) There is no restriction on redemptions from a Segregated Portfolio",
    },
    {
      question:
        "Which is the most important factor for comparing performance of liquid funds?",
      options: [
        "A) The Maturity",
        "B) The Expense Ratio",
        "C) The taxation aspect",
        "D) The NAV",
      ],
      answer: "B) The Expense Ratio",
    },
    {
      question: "Management of investments by mutual funds is governed by:",
      options: [
        "A) Association of Mutual Funds in India (AMFI)",
        "B) Reserve Bank of India (RBI)",
        "C) Securities and Exchange Board of India (SEBI)",
        "D) Both RBI and SEBI",
      ],
      answer: "C) Securities and Exchange Board of India (SEBI)",
    },
    {
      question:
        "Which of the below statements is an important advantage of an Exchange Traded Fund (ETF)?",
      options: [
        "A) A person can closely track the current valuation of an ETF and buy/sell the units on a stock exchange at those prices",
        "B) ETFs generally give higher returns than other Mutual Funds",
        "C) An investor in an ETF can have control on where his money can be invested",
        "D) All of the above",
      ],
      answer:
        "A) A person can closely track the current valuation of an ETF and buy/sell the units on a stock exchange at those prices",
    },
    {
      question:
        "The employees of institutions that are into the distribution of mutual funds need to clear and obtain an Employee Unique and Identification Number (EUIN) from AMFI.",
      options: [
        "A) SEBI - VA Mutual Fund Distributors Certification Examination",
        "B) ONISM - VB Mutual Fund Distributors Certification Foundation",
        "C) AMFI - VA Mutual Fund Distributors Certification Examination",
        "D) NISM - VA Mutual Fund Distributors Certification Examination",
      ],
      answer: "C) AMFI - VA Mutual Fund Distributors Certification Examination",
    },
    {
      question:
        "Identify which of the following statement/s is/are false in context of benchmarks.",
      options: [
        "A) An independent agency should calculate the benchmark in a transparent manner",
        "B) The process of choosing a benchmark for an Index Fund is very complex",
        "C) Only A is false",
        "D) Only B is false",
        "E) Both A and B are false",
        "F) None of the above",
      ],
      answer:
        "B) The process of choosing a benchmark for an Index Fund is very complex",
    },
    {
      question:
        "Identify the true statement with respect to 'Unclaimed Dividend' and redemption amounts in mutual fund schemes.",
      options: [
        "A) The Asset Management Company can charge a penalty from the investors to refund the unclaimed dividend",
        "B) The Asset Management Company can recover investment management fees from the investor but within the prescribed rates",
        "C) The Asset Management Company has to transfer the unclaimed amounts to the investor education fund",
        "D) All of the above",
      ],
      answer:
        "C) The Asset Management Company has to transfer the unclaimed amounts to the investor education fund",
    },
    {
      question:
        "If an investor wants to get updated monthly performance and portfolio data on mutual funds, which of the following documents should he read?",
      options: [
        "A) Scheme Information Document (SID)",
        "B) Fund Fact Sheet",
        "C) Key Information Memorandum (KIM)",
        "D) Statement of Additional Information (SAI)",
      ],
      answer: "B) Fund Fact Sheet",
    },
    {
      question: "Identify the TRUE statement",
      options: [
        "A) It is mandatory for the AMC to disclose the valuation policy",
        "B) The AMC is not accountable for policies and procedures for detecting and preventing incorrect valuation",
        "C) Only A is true",
        "D) Only B is true",
        "E) Both A and B are true",
        "F) None of the above",
      ],
      answer: "A) It is mandatory for the AMC to disclose the valuation policy",
    },
    {
      question:
        "A Mutual Fund scheme gives a return of 10% and the beta of that scheme is 0.5. The risk-free return is 7.5%. What is the Treynor Ratio of this scheme?",
      options: ["A) 3%", "B) 5%", "C) 7.5%", "D) 10%"],
      answer: "A) 3%",
    },
    {
      question: "A top performing scheme within a category:",
      options: [
        "A) Is the best choice for an investor to invest his funds",
        "B) May or may not be the top performer in the next years to come",
        "C) Usually remains the top performer for a long period of time",
        "D) Usually be the worst performer in the next years to come",
      ],
      answer:
        "B) May or may not be the top performer in the next years to come",
    },
    {
      question:
        "A person who wants to retain liquidity in his investments will invest in:",
      options: [
        "A) ELSS Schemes",
        "B) Fixed Deposits",
        "C) PPFs",
        "D) Liquid Funds",
      ],
      answer: "D) Liquid Funds",
    },
    {
      question: "In whose beneficial interest is a mutual fund managed?",
      options: ["A) Trustees", "B) Unit holders", "C) Sponsors", "D) AMC"],
      answer: "B) Unit holders",
    },
    {
      question:
        "If a third party payment is to be made for subscribing to a mutual fund scheme, then which of the following is/are essentially required?",
      options: [
        "A) The minimum investment has to be Rs. 50,000",
        "B) The third party has to provide PAN details and also comply with the KYC norms",
        "C) The third party should also have a folio with the mutual fund",
        "D) All of the above",
      ],
      answer: "D) All of the above",
    },

    {
      question: "In whose beneficial interest is a mutual fund managed?",
      options: ["A) Trustees", "B) Unit holders", "C) Sponsors", "D) AMC"],
      answer: "B) Unit holders",
    },
    {
      question:
        "If a third party payment is to be made for subscribing to a mutual fund scheme, then which of the following is/are essentially required?",
      options: [
        "A) The minimum investment has to be Rs. 50,000",
        "B) The third party has to provide PAN details and also comply with the KYC norms",
        "C) The third party should also have a folio with the mutual fund",
        "D) All of the above",
      ],
      answer: "D) All of the above",
    },
    {
      question: "Identify the false statement/s.",
      options: [
        "A) Investments in mutual funds can be made on a repatriable basis by NRIs",
        "B) The mutual fund will automatically pay in Dollars when the NRI redeems his investments which were made on a repatriable basis",
        "C) Both A and B are false",
        "D) None of the above",
      ],
      answer: "C) Both A and B are false",
    },
    {
      question:
        "Identify the category of mutual fund scheme in which the Net Asset Value (NAV) has to be declared for up to 4 decimal points?",
      options: [
        "A) Mid-Cap Funds",
        "B) Blue Chip Funds",
        "C) Hybrid Funds",
        "D) Liquid Funds",
      ],
      answer: "D) Liquid Funds",
    },
    {
      question:
        "What is the rule regarding Know Your Customer (KYC) requirement for minor’s investment?",
      options: [
        "A) No KYC is required",
        "B) It depends whether the investment is in equity funds or debt funds",
        "C) KYC will be required only if the transaction is through a stock exchange",
        "D) KYC of the guardian is required",
      ],
      answer: "D) KYC of the guardian is required",
    },
    {
      question:
        "In a Large Cap mutual fund scheme, the minimum investment limit in equity and equity-related instruments of large cap companies is",
      options: ["A) 90%", "B) 80%", "C) 70%", "D) 60%"],
      answer: "B) 80%",
    },
    {
      question:
        "When an investment is done by a minor, what is the rule regarding Know Your Customer (KYC) requirement?",
      options: [
        "A) No KYC is required",
        "B) KYC will be required only if the transaction is through a stock exchange",
        "C) KYC of the guardian is required",
        "D) It depends on the type of fund",
      ],
      answer: "C) KYC of the guardian is required",
    },
    {
      question:
        "Distributors can 'opt-out' of charging transaction charges at which level?",
      options: [
        "A) AMC level",
        "B) Investor level",
        "C) Scheme level",
        "D) Distributor level",
      ],
      answer: "A) AMC level",
    },
    {
      question:
        "The investment range in debt instruments is between __% of total assets in a Conservative Hybrid Fund.",
      options: [
        "A) 80 percent and 95 percent",
        "B) 75 percent and 90 percent",
        "C) 50 percent and 65 percent",
        "D) 25 percent and 50 percent",
      ],
      answer: "A) 80 percent and 95 percent",
    },
    {
      question:
        "Which distributor will be covered under the due diligence process of the Asset Management Company as mandated by SEBI?",
      options: [
        "A) A distributor who has a presence in more than 10 locations",
        "B) A distributor who has AUM of over Rs. 100 crores from non-institutional investors",
        "C) A distributor who has received commission of over Rs 25 lakhs from one mutual fund",
        "D) All of the above",
      ],
      answer: "D) All of the above",
    },
  ];
  // --- State for User Answers & Check Status ---
  const [userAnswers, setUserAnswers] = useState(
    Array(quizData.length).fill("")
  );
  const [checked, setChecked] = useState(Array(quizData.length).fill(false));

  // --- Handle Option Selection ---
  const handleOptionChange = (qIndex, selectedOption) => {
    if (checked[qIndex]) return; // Allow re-selection even after checking
    const updatedAnswers = [...userAnswers];
    updatedAnswers[qIndex] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  // --- Handle Check Answer Button ---
  const checkAnswer = (qIndex) => {
    if (!userAnswers[qIndex]) {
      alert("Please select an option before checking.");
      return;
    }
    const updatedChecked = [...checked];
    updatedChecked[qIndex] = true;
    setChecked(updatedChecked);
  };

  // --- Reset the Answer for a Question ---
  const resetAnswer = (qIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[qIndex] = "";
    const updatedChecked = [...checked];
    updatedChecked[qIndex] = false;
    setUserAnswers(updatedAnswers);
    setChecked(updatedChecked);
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>

      {quizData.map((q, qIndex) => {
        const selectedAnswer = userAnswers[qIndex];
        const isChecked = checked[qIndex];
        const isCorrect = selectedAnswer === q.answer;

        return (
          <div key={qIndex} className="question-block">
            <h3>{q.question}</h3>
            {q.options.map((option, oIndex) => {
              const isSelected = selectedAnswer === option;
              let optionClass = "";

              if (isChecked) {
                if (option === q.answer) {
                  optionClass = "correct";
                } else if (isSelected && option !== q.answer) {
                  optionClass = "incorrect";
                }
              }

              return (
                <label key={oIndex} className={`option ${optionClass}`}>
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    value={option}
                    checked={isSelected}
                    disabled={isChecked}
                    onChange={() => handleOptionChange(qIndex, option)}
                  />
                  {option}
                </label>
              );
            })}

            {!isChecked ? (
              <button className="check-btn" onClick={() => checkAnswer(qIndex)}>
                Check Answer
              </button>
            ) : (
              <>
                <p
                  className={`result ${
                    isCorrect ? "correct-text" : "incorrect-text"
                  }`}
                >
                  {isCorrect
                    ? "✅ Correct!"
                    : `❌ Wrong! Correct answer: ${q.answer}`}
                </p>
                <button
                  className="reset-btn"
                  onClick={() => resetAnswer(qIndex)}
                >
                  Reset Answer
                </button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
