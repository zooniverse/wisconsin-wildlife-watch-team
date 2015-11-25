import React from 'react';
import TeamItem from './TeamItem';
import OrgItem from './OrgItem';
import ImgSrcItem from './ImgSrcItem';

export default React.createClass({
  render() {
    return (
      <div className="secondary-content">
        <div className="left-column">
          {this.props.currentTab == 1 ?
            <div className="content">
              <h2>The WildlifeWatch Team</h2>
              {teamTabs[0].content.map(function(item, index) {
                return (
                  <TeamItem item={item} key={index}/>
                );
              })}
            </div>
            :null
          }

          {this.props.currentTab == 2 ?
            <div className="content">
              <h2>Participating Organizations</h2>
              {teamTabs[1].content.map(function(item, index) {
                return (
                  <OrgItem item={item} key={index}/>
                );
              })}
            </div>
            :null
          }

          {this.props.currentTab == 3 ?
            <div className="content">
              <h2>Image Credits</h2>
              {teamTabs[2].content.map(function(item, index) {
                return (
                  <ImgSrcItem item={item} key={index}/>
                );
              })}
            </div>
            :null
          }

        </div>
      </div>
    )
  }
});

var teamMembers = [
  {name: "Phil Townsend", imgSrc: "src/images/team_members/phil-townsend.jpg", description: "Phil Townsend is a professor of Forest & Wildlife Ecology at the University of Wisconsin. He is interested in how different components of ecosystems interact across landscapes, for example how nutrients and water affect vegetation, and then how patterns of vegetation processes affect insects and animals. He is particularly interested in how we can leverage a range of technologies including remote sensing to better understand ecosystems."},
  {name: "Ben Zuckerberg", imgSrc: "src/images/team_members/ben-zuckerberg.jpg", description: "Dr. Benjamin Zuckerberg is an assistant professor in the Department of Forest and Wildlife Ecology at the University of Wisconsin-Madison. His research focuses on how climate change and habitat loss impacts wildlife populations. He is a strong advocate for the role of the public in collecting biological data. Using the data from these “citizen science” programs, Ben has studied shifts in bird ranges and migration in response to a changing climate."},
  {name: "Tim Van Deelen", imgSrc: "src/images/team_members/tim-van-deelen.jpg", description: "Tim Van Deelen has been on the faculty at the UW-Madison since 2004. Tim’s research specializes in the applied management of wildlife with an emphasis on large mammals in Wisconsin and is a frequent collaborator with the Wisconsin DNR and the Apostle Islands National Lakeshore. Prior positions include working as the research specialist for deer in the Wisconsin Department of Natural Resources and as a Research Scientist for the Illinois Natural History Survey where he had a joint appointment with the University of Illinois at Urbana-Champaign."},
  {name: "Aditya Singh", imgSrc: "src/images/team_members/aditya-singh.jpg", description: "Aditya Singh is a post-doctoral scientist with the Department of Forest and Wildlife Ecology at the University of Wisconsin-Madison. He uses a combination of airborne and remotely sensed data to study the impacts of environmental change and disturbance on landscape-scale indicators of ecosystem health."},
  {name: "Karl Martin", imgSrc: "src/images/team_members/karl-martin.jpg", description: "Karl Martin is the State Director for the Community, Natural Resource and Economic Development Program and an Assistant Dean with the University of Wisconsin Cooperative Extension. He is an adjunct Associate Professor at the University of Wisconsin-Madison’s Forest and Wildlife Ecology Department and recently served as the Wildlife and Forestry Research Section Chief at the Wisconsin Department of Natural Resources. Karl received his Bachelors degree in Wildlife Ecology at UW-Madison and his Masters and Doctorate degrees at Oregon State University. Karl’s research has focused on interaction of forest management and multi-scale wildlife habitat relationships. His current position focuses on the ‘Wisconsin Idea’ of taking the information and resources of the University to communities and citizens of the state."},
  {name: "John Clare", imgSrc: "src/images/team_members/john-clare.jpg", description: "John Clare is a PhD student in the department of Forest and Wildlife Ecology at University of Wisconsin-Madison. His primary interests involve understanding patterns in species distribution and abundance, with a particular focus on identifying limiting mechanisms and developing statistical techniques to address unique sampling problems."},
  {name: "Christine Anhalt-Depies", imgSrc: "src/images/team_members/christine-anhalt-depies.jpg", description: "Christine Anhalt-Depies is a PhD student in the department of Forest and Wildlife Ecology at the University of Wisconsin-Madison. Her research focuses on understanding the educational and social outcomes of public participation in scientific research."}
];

var organizations = [
  {name: "University of Wisconsin-Madison", imgSrc: "src/images/organizations/uwmn.png", description: "Members of the Snapshot Wisconsin team are ecologists at the University of Wisconsin Madison in the Department of Forest and Wildlife Ecology. UW-Madison is a public, land-grant institution founded in 1848 whose mission is to provide 'a learning environment in which faculty, staff and students can discover, examine critically, preserve and transmit the knowledge, wisdom and values that will help insure the survival of this and future generations and improve the quality of life for all.'"},
  {name: "NASA", imgSrc: "src/images/organizations/nasa.gif", description: "NASA provided partial funding for the first year of the project thought the Ecological Forecasting for Conservation and Natural Resource Management Program. The NASA Applied Sciences Program supports projects that enable uses of Earth observations in organizations' policy, business, and management decisions."},
  {name: "Adler Planetarium", imgSrc: "src/images/organizations/adler.jpg", description: "The Adler Planetarium was founded in 1930 by Chicago business leader Max Adler. A recognized leader in public learning, the Adler inspires young people -particularly women and minorities - to pursue careers in science, technology, engineering, and math. Scientists, historians and educators at the museum inspire the next generation of explorers."},
  {name: "University of Wisconsin-Extension", imgSrc: "src/images/organizations/uw-extension.png", description: "The University of Wisconsin Extension provides ongoing support for the project. The Extension’s purpose is to 'connect people with the University of Wisconsin and engage with them in transforming lives and communities.'"}
];

var imageCredits = [
  {imgSrc: "src/images/image_credits/beaver-american-1.jpg", alt: "", description: "American Beaver, Steve Hillebrand, USFWS"},
  {imgSrc: "src/images/image_credits/beaver-american-2.jpg", alt: "", description: "American Beaver, USFWS"},
  {imgSrc: "src/images/image_credits/muskrat-1.jpg", alt: "", description: "Muskrat, R. Town, USFWS"},
  {imgSrc: "src/images/image_credits/moose-1.jpg", alt: "", description: "Moose, Steve Hillebrand, USFWS"},
  {imgSrc: "src/images/image_credits/pheasant-ring-necked-1.jpg", alt: "", description: "Ring-Necked Pheasent, Dave Menke, USFWS"},
  {imgSrc: "src/images/image_credits/pheasant-ring-necked-2.jpg", alt: "", description: "Ring-Necked Pheasent, Dave Menke, USFWS"},
  {imgSrc: "src/images/image_credits/crane-whooping-1.jpg", alt: "", description: "Whooping Crane, Steve Hillebrand, USFWS"},
  {imgSrc: "src/images/image_credits/crane-whooping-2.jpg", alt: "", description: "Whooping Crane, Ryan Hagerty, USFWS"},
  {imgSrc: "src/images/image_credits/amphibians-and-reptiles-1.jpg", alt: "", description: "Turtle and frog, USFWS"},
  {imgSrc: "src/images/image_credits/lynx-canada-1.jpg", alt: "", description: "Canada lynx, Jacob Frank, NPS"},
  {imgSrc: "src/images/image_credits/wolverine-1.jpg", alt: "", description: "Wolverine, NPS"},
  {imgSrc: "src/images/image_credits/woodchuck-1.jpg", alt: "", description: "Woodchuck, Andrew MacLachlan, USFWS"},
  {imgSrc: "src/images/image_credits/jackrabbit-white-tailed-1.jpg", alt: "", description: "White-tailed jackrabbit, FWS"},
  {imgSrc: "src/images/image_credits/spotted-skunk-eastern-1.jpg", alt: "", description: "Spotted skunk, NPS"}
];

var teamTabs = [
  {id: 1, title: "People", content: teamMembers},
  {id: 2, title: "Organizations", content: organizations},
  {id: 3, title: "Image Credits", content: imageCredits}
];
