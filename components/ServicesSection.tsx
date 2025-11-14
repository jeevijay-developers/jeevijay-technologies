"use client";

export const ServicesSection = () => {
  const services = [
    {
      category: "Workflow Automation",
      title: "Automate repetitive tasks",
      description:
        "We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains saving time and cutting down errors.",
      features: ["Internal Task Bots", "100+ Automations"],
      image: "/images/workflow-automation.png", // Add your image here
    },
    {
      category: "AI Assistant",
      title: "Delegate Daily Tasks",
      description:
        "From scheduling meetings to managing emails and summarizing reports, our AI assistants work where the task to help your business running smarter and faster.",
      features: ["Summaries", "Scheduling", "Many more"],
      image: "/images/ai-assistant.png", // Add your image here
    },

    {
      category: "Sales & Marketing",
      title: "Accelerate Sales Growth",
      description:
        "AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and builds stronger brand presence.",
      features: ["Leads", "Content", "Social post"],
      image: "/images/sales-marketing.png", // Add your image here
    },
    {
      category: "Custom Projects",
      title: "Build Smarter Systems",
      description:
        "Whether you're starting from scratch or enhancing an existing system, we offer strategic consulting and develop custom AI projects aligned with your unique goals.",
      features: ["Strategy", "Custom AI", "Consulting"],
      image: "/images/custom-projects.png", // Add your image here
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Solutions That Take Your
            <br />
            Business to the Next Level
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We design, develop, and implement automation tools that help you
            work smarter, not harder
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`${
                  index % 2 === 1 ? "md:order-2" : ""
                } bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-300`}
              >
                <p className="text-purple-400 text-sm font-medium mb-3">
                  {service.category}
                </p>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-lg bg-black/40 border border-zinc-800 text-sm text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Task Management Preview - Only for Workflow Automation */}
              {index === 0 ? (
              <div
                className={`${
                  index % 2 === 1 ? "md:order-1" : ""
                } relative h-96 bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden p-6`}
              >
                {/* Task Board Header */}
                <div className="flex gap-4 mb-6">
                  <button className="text-white text-lg font-medium pb-2 border-b-2 border-white">
                    All Tasks
                  </button>
                  <button className="text-gray-500 text-lg font-medium pb-2">
                    Waiting for approval
                  </button>
                </div>

                {/* Task Cards */}
                <div className="space-y-4">
                  {/* Payroll Management Task */}
                  <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Payroll management</h4>
                        <p className="text-gray-400 text-sm">Due on 2nd july</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Employee Tracking Task */}
                  <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Employee Tracking</h4>
                        <p className="text-gray-400 text-sm">2 days ago</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Social Media Post Task */}
                  <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Social media post</h4>
                        <p className="text-gray-400 text-sm">Cancelled by user</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>

                  {/* Lead List Task */}
                  <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Lead list</h4>
                        <p className="text-gray-400 text-sm">70% prepared</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              ) : index === 1 ? (
              <div
                className={`${
                  index % 2 === 1 ? "md:order-1" : ""
                } relative h-96 bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden p-6 flex flex-col items-center justify-center`}
              >
                {/* Purple Glowing Icon */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-purple-500/30 blur-3xl rounded-full"></div>
                  <div className="relative">
                    <svg className="w-24 h-24 text-purple-400" viewBox="0 0 100 100" fill="none">
                      <circle cx="35" cy="35" r="20" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.6" />
                      <circle cx="65" cy="65" r="20" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.8" />
                      <path d="M45 35 L55 65" stroke="currentColor" strokeWidth="4" opacity="0.7" />
                    </svg>
                  </div>
                </div>

                {/* Heading */}
                <h3 className="text-white text-2xl font-medium mb-3 text-center">
                  What can I help with?
                </h3>

                {/* Subtitle */}
                <p className="text-gray-400 text-center text-sm max-w-md mb-8 leading-relaxed">
                  Weather you want help in customer handling or make changes in your system just give me command
                </p>

                {/* Input Area */}
                <div className="w-full max-w-lg">
                  <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-4 mb-3">
                    <div className="flex items-center justify-between mb-3">
                      <input
                        type="text"
                        placeholder="Provide me full report"
                        className="bg-transparent text-gray-400 text-sm flex-1 outline-none"
                        disabled
                      />
                      <button className="text-purple-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </button>
                    </div>
                    <button className="flex items-center gap-2 text-gray-500 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Add document
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-center gap-3 text-xs">
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Analyze
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Generate Image
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      research
                    </button>
                  </div>
                </div>
              </div>
              ) : index === 2 ? (
              <div
                className={`${
                  index % 2 === 1 ? "md:order-1" : ""
                } relative h-96 bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden p-6`}
              >
                {/* Email Sending Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white text-xl font-medium">E-mail Sending..</h3>
                  <div className="w-8 h-8">
                    <svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="60" strokeDashoffset="15" className="animate-spin" style={{ transformOrigin: 'center' }} />
                    </svg>
                  </div>
                </div>

                {/* Filter Tags */}
                <div className="flex gap-3 mb-6">
                  <span className="px-4 py-2 rounded-full bg-zinc-800 text-white text-sm border border-zinc-700">
                    LinkedIn
                  </span>
                  <span className="px-4 py-2 rounded-full bg-zinc-800 text-white text-sm border border-zinc-700">
                    IT services
                  </span>
                  <span className="px-4 py-2 rounded-full bg-zinc-800 text-white text-sm border border-zinc-700">
                    Founders
                  </span>
                </div>

                {/* Contact Card - Verified */}
                <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Jack Daniel</h4>
                        <p className="text-gray-400 text-sm">Founder</p>
                      </div>
                    </div>
                    <span className="text-gray-400 text-sm">Verified</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 mb-1">E-mail</p>
                      <p className="text-gray-300">justin@main.com</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Company</p>
                      <p className="text-gray-300">Xavier LLC</p>
                    </div>
                  </div>
                </div>

                {/* Contact Card - Unverified */}
                <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 opacity-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">George Chapel</h4>
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm">Unverified</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <button className="text-gray-500 text-sm">Draft</button>
                  <button className="text-gray-500 text-sm">Schedule</button>
                  <button className="text-gray-500 text-sm">Sent</button>
                </div>
              </div>
              ) : index === 3 ? (
              <div
                className={`${
                  index % 2 === 1 ? "md:order-1" : ""
                } relative h-96 bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden p-6`}
              >
                {/* Greeting Header */}
                <div className="mb-6">
                  <h3 className="text-white text-2xl font-medium mb-2">Hey David!</h3>
                  <p className="text-gray-400 text-base">Here is your Custom project & schedule</p>
                </div>

                {/* Ongoing Project Section */}
                <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800 mb-4">
                  <div className="flex items-center gap-2 mb-3 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    <span className="text-sm">On going project :</span>
                  </div>
                  
                  {/* Project Card */}
                  <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Customer Support Chatbot</h4>
                        <p className="text-gray-400 text-sm">90% Finished</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Schedule Section */}
                <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800">
                  <div className="flex items-center gap-2 mb-4 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">Schedule</span>
                  </div>

                  {/* Week Days */}
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1.5 rounded-lg bg-purple-500/20 text-purple-400 text-xs font-medium border border-purple-500/30">
                      Mo
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-zinc-800 text-gray-400 text-xs">Tu</span>
                    <span className="px-3 py-1.5 rounded-lg bg-zinc-800 text-gray-400 text-xs">We</span>
                    <span className="px-3 py-1.5 rounded-lg bg-zinc-800 text-gray-400 text-xs">Th</span>
                    <span className="px-3 py-1.5 rounded-lg bg-zinc-800 text-gray-400 text-xs">Fr</span>
                    <span className="px-3 py-1.5 rounded-lg bg-zinc-800 text-gray-400 text-xs">Sa</span>
                    <span className="px-3 py-1.5 rounded-lg bg-zinc-800 text-gray-400 text-xs">Su</span>
                  </div>

                  {/* Schedule Items */}
                  <div className="space-y-3">
                    {/* Discovery Call */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">Discovery call</p>
                        <p className="text-gray-500 text-xs">10:00 am to 10:30 am</p>
                      </div>
                      <button className="text-gray-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>

                    {/* Custom Automation */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">Custom automation</p>
                        <p className="text-gray-500 text-xs">06:00 pm to 06:30 pm</p>
                      </div>
                      <button className="text-gray-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              ) : (
              <div
                className={`${
                  index % 2 === 1 ? "md:order-1" : ""
                } relative h-96 bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-600 text-sm">
                    Image placeholder for {service.category}
                  </div>
                </div>
              </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
