import React from 'react'

const EventRow = ({event}) => {
  return (
    <tr>
                            <td className="table-cell">
									<p className="">
										{event.date}
									</p>
								</td>
								<td className="table-cell">
									<div className="flex-center">
										<div className="image-cell">
											<img className=""
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt="" />
                                        </div>
											<div className="name-cell">
												<p className="">
													{event.name}
												</p>
											</div>
										</div>
								</td>
								<td className="table-cell">
									<span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span className="relative">{event.location}</span>
									</span>
								</td>
							</tr>
  )
}

export default EventRow