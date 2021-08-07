import './DappTableBlock.scss';
import React from 'react';  

function BlockTable (){
    return(
        <>
                     <header class="projects-header">
						<div class="title">Latest Blocks</div>
						
					</header>
					<table class="projects-table">
						<thead>
							<tr>
								<th>Block No</th>
								<th>Block Hash</th>
								<th>Miner</th>
								<th>value</th>
								
							</tr>
						</thead>
						<tr>
							<td>
								<p>177,789</p>
								<p></p>
							</td>
							<td>
								<p>236x4576567x57</p>
								<p></p>
							</td>
							<td class="member">
								<figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" /></figure>
								<div class="member-info">
									<p>Random Miner</p>
									<p>Miner</p>
								</div>
							</td>
							<td>
								<p>$4,670</p>
								<p></p>
							</td>
							
                        </tr>
                    </table>                            

        </>
    )
}

export default BlockTable;