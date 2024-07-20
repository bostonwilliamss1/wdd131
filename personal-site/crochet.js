const crochetPatterns = [
	{
		author: 'Jane Doe',
		url: 'https://www.yarnspirations.com/collections/patterns?filter.p.m.global.skill_type=Crochet&filter.p.m.global.project_type=Hats',
		isBasedOn: '',
		estimatedTime: '3 hours',
		datePublished: '2023-04-15',
		tags: ['Hat', 'Beginner', 'Winter'],
		description: 'A cozy winter hat perfect for beginners.',
		image: './images/crochethat.jpeg',
		materials: [
			' 1 skein of worsted weight yarn',
			' 5mm crochet hook',
			' Tapestry needle',
			' Scissors'
		],
		name: 'Winter Cozy Hat',
		skillLevel: 'Beginner',
		patternInstructions: [
			'Start with a magic circle and make 6 single crochets into the circle.',
			'Tighten the circle and join with a slip stitch.',
			'Chain 1, make 2 single crochets in each stitch around. (12 stitches)',
			'Continue increasing rounds until you have 60 stitches.',
			'Work evenly in single crochet until the hat measures 7 inches from the center.',
			'Finish off and weave in ends.'
		],
		size: 'One size fits most',
		rating: 3
	},
	{
		author: 'John Smith',
		url: 'https://daisyfarmcrafts.com/50-free-crochet-baby-blankets/',
		isBasedOn: '',
		estimatedTime: '5 hours',
		datePublished: '2023-06-10',
		tags: ['Blanket', 'Intermediate', 'Baby'],
		description: 'A beautiful baby blanket with a lacy pattern.',
		image: './images/crochet-baby-blanket.webp',
		materials: [
			' 3 skeins of DK weight yarn',
			' 4mm crochet hook',
			' Tapestry needle',
			' Scissors'
		],
		name: 'Lacy Baby Blanket',
		skillLevel: 'Intermediate',
		patternInstructions: [
			'Chain 100.',
			'Row 1: Double crochet in the 4th chain from the hook and in each chain across. (98 stitches)',
			'Row 2: Chain 3, turn. Double crochet in the first stitch, *skip 2 stitches, 5 double crochets in the next stitch, skip 2 stitches, double crochet in the next stitch*. Repeat from * to * across.',
			'Repeat Row 2 until the blanket measures 36 inches.',
			'Finish off and weave in ends.'
		],
		size: '36 x 36 inches',
		rating: 5
	},
	{
		author: 'Alice Johnson',
		url: 'https://patriciafentie.com/2020/09/30/easy-crocheted-fall-scarf-tutorial/',
		isBasedOn: '',
		estimatedTime: '2 hours',
		datePublished: '2023-05-20',
		tags: ['Scarf', 'Easy', 'Fall'],
		description: 'A stylish fall scarf that is easy to make.',
		image: './images/fall-scarf.jpg',
		materials: [
			' 2 skeins of bulky weight yarn',
			' 8mm crochet hook',
			' Tapestry needle',
			' Scissors'
		],
		name: 'Fall Fashion Scarf',
		skillLevel: 'Easy',
		patternInstructions: [
			'Chain 120.',
			'Row 1: Half double crochet in the 3rd chain from the hook and in each chain across. (118 stitches)',
			'Row 2: Chain 2, turn. Half double crochet in each stitch across.',
			'Repeat Row 2 until the scarf measures 8 inches wide.',
			'Finish off and weave in ends.'
		],
		size: '6 x 60 inches',
		rating: 4.8
	},
	{
		author: 'Emily Clark',
		url: 'https://nedandmimi.com/summer-shawl-crochet-patterns/',
		isBasedOn: '',
		estimatedTime: '4 hours',
		datePublished: '2023-07-01',
		tags: ['Shawl', 'Intermediate', 'Spring'],
		description: 'A lightweight shawl perfect for cool spring evenings.',
		image: './images/spring-shawl.jpeg',
		materials: [
			' 2 skeins of fingering weight yarn',
			' 4mm crochet hook',
			' Tapestry needle',
			' Scissors'
		],
		name: 'Spring Breeze Shawl',
		skillLevel: 'Intermediate',
		patternInstructions: [
			'Chain 4 and join to form a ring.',
			'Row 1: Chain 3 (counts as a double crochet), 2 double crochet in the ring, chain 3, 3 double crochet in the ring.',
			'Row 2: Chain 3, turn. 2 double crochet in the first stitch, double crochet in each stitch to the chain-3 space, (2 double crochet, chain 3, 2 double crochet) in the chain-3 space, double crochet in each stitch to the end, 3 double crochet in the last stitch.',
			'Repeat Row 2 until the shawl reaches the desired size.',
			'Finish off and weave in ends.'
		],
		size: 'One size fits all',
		rating: 4.7
	},
	{
		author: 'Michael Brown',
		url: 'https://www.thefriendlyredfox.com/crochet-teddy-bear-a-free-pattern/',
		isBasedOn: '',
		estimatedTime: '3.5 hours',
		datePublished: '2023-08-15',
		tags: ['Toy', 'Amigurumi', 'Advanced'],
		description: 'A cute amigurumi teddy bear.',
		image: './images/teddy-bear.jpeg',
		materials: [
			' 1 skein of worsted weight yarn',
			' 3.5mm crochet hook',
			' Tapestry needle',
			' Stuffing',
			' Safety eyes',
			' Embroidery floss'
		],
		name: 'Amigurumi Teddy Bear',
		skillLevel: 'Advanced',
		patternInstructions: [
			'Start with a magic circle and make 6 single crochets into the circle.',
			'Increase each round according to the pattern to shape the head and body.',
			'Create arms and legs separately and attach them to the body.',
			'Add safety eyes and embroider the nose and mouth.',
			'Stuff the bear and sew up any remaining openings.'
		],
		size: '8 inches tall',
		rating: 4.9
	},
	{
		author: 'Sophia Davis',
		url: 'https://www.joyasitflies.co.uk/post/thin-summer-crochet-headband',
		isBasedOn: '',
		estimatedTime: '1.5 hours',
		datePublished: '2023-09-05',
		tags: ['Accessory', 'Easy', 'Summer'],
		description: 'A trendy crochet headband.',
		image: './images/crochet-headband.jpeg',
		materials: [
			' 1 skein of cotton yarn',
			' 4mm crochet hook',
			' Tapestry needle',
			' Scissors'
		],
		name: 'Summer Headband',
		skillLevel: 'Easy',
		patternInstructions: [
			'Chain 70.',
			'Row 1: Single crochet in the 2nd chain from the hook and in each chain across. (69 stitches)',
			'Row 2: Chain 1, turn. Single crochet in each stitch across.',
			'Repeat Row 2 until the headband is 2 inches wide.',
			'Finish off and sew the ends together to form a loop. Weave in ends.'
		],
		size: 'One size fits most',
		rating: 4.6
	},
	{
		author: 'Olivia Martinez',
		url: 'https://hookedbyalli.com/products/the-cozy-winter-sweater',
		isBasedOn: '',
		estimatedTime: '6 hours',
		datePublished: '2023-10-12',
		tags: ['Sweater', 'Intermediate', 'Winter'],
		description: 'A warm and cozy crochet sweater.',
		image: './images/crochet-sweater.jpeg',
		materials: [
			' 4 skeins of bulky weight yarn',
			' 6mm crochet hook',
			' Tapestry needle',
			' Scissors',
			' Stitch markers'
		],
		name: 'Cozy Winter Sweater',
		skillLevel: 'Intermediate',
		patternInstructions: [
			'Start with the back panel: Chain 50.',
			'Row 1: Half double crochet in the 3rd chain from the hook and in each chain across. (48 stitches)',
			'Row 2: Chain 2, turn. Half double crochet in each stitch across.',
			'Repeat Row 2 until the back panel measures 20 inches.',
			'Repeat the same process for the front panel.',
			'For the sleeves, chain 30 and work in half double crochet rows until the sleeves measure 18 inches.',
			'Sew the panels and sleeves together, and weave in ends.'
		],
		size: 'Medium',
		rating: 4.8
	},
	{
		author: 'Liam Wilson',
		url: 'https://www.yarncraftee.com/eco-friendly-market-bag-crochet-pattern/',
		isBasedOn: '',
		estimatedTime: '2 hours',
		datePublished: '2023-11-01',
		tags: ['Bag', 'Easy', 'Eco-friendly'],
		description: 'A reusable market bag.',
		image: './images/market-bag.jpeg',
		materials: [
			' 2 skeins of cotton yarn',
			' 5mm crochet hook',
			' Tapestry needle',
			' Scissors'
		],
		name: 'Eco-friendly Market Bag',
		skillLevel: 'Easy',
		patternInstructions: [
			'Chain 40 and join to form a ring.',
			'Round 1: Chain 1, single crochet in each chain around. Join with a slip stitch. (40 stitches)',
			'Round 2: Chain 3 (counts as a double crochet), double crochet in each stitch around. Join with a slip stitch.',
			'Repeat Round 2 until the bag measures 14 inches from the base.',
			'Create the handles by chaining 50 and attaching them to the opposite side of the bag. Repeat for the second handle.',
			'Finish off and weave in ends.'
		],
		size: 'One size fits most',
		rating: 4
	},
	{
		author: 'Charlotte Taylor',
		url: 'https://www.ourdailycraft.com/2023/11/10/crochet-christmas-ornaments/',
		isBasedOn: '',
		estimatedTime: '3 hours',
		datePublished: '2023-12-22',
		tags: ['Decoration', 'Intermediate', 'Christmas'],
		description: 'Crochet Christmas ornaments.',
		image: './images/christmas-ornaments.jpeg',
		materials: [
			' 1 skein of worsted weight yarn in red, green, and white',
			' 4mm crochet hook',
			' Tapestry needle',
			' Stuffing',
			' Ribbons'
		],
		name: 'Christmas Ornaments',
		skillLevel: 'Intermediate',
		patternInstructions: [
			'For the ball ornament, start with a magic circle and make 6 single crochets into the circle.',
			'Increase each round until you have 36 stitches.',
			'Work evenly in single crochet for 4 rounds.',
			'Start decreasing until you have 6 stitches left. Stuff the ornament before closing.',
			'For the star ornament, chain 3 and join to form a ring.',
			'Round 1: Chain 1, 10 single crochet in the ring. Join with a slip stitch.',
			'Round 2: *Chain 5, single crochet in the second chain from the hook, half double crochet in the next chain, double crochet in the next chain, triple crochet in the last chain. Skip 1 single crochet and slip stitch in the next.* Repeat 4 more times.',
			'Finish off and weave in ends. Attach a ribbon for hanging.'
		],
		size: 'Varies',
		rating: 4.9
	},
	{
		author: 'Ethan Moore',
		url: 'https://www.hanjancrochet.com/modern-crochet-pillow-patterns/',
		isBasedOn: '',
		estimatedTime: '2.5 hours',
		datePublished: '2024-01-10',
		tags: ['Home Decor', 'Easy', 'Modern'],
		description: 'A modern crochet pillow cover.',
		image: './images/pillow-cover.jpeg',
		materials: [
			' 3 skeins of chunky weight yarn',
			' 6mm crochet hook',
			' Tapestry needle',
			' Pillow insert',
			' Scissors'
		],
		name: 'Modern Pillow Cover',
		skillLevel: 'Easy',
		patternInstructions: [
			'Chain 60.',
			'Row 1: Double crochet in the 4th chain from the hook and in each chain across. (58 stitches)',
			'Row 2: Chain 3, turn. Double crochet in each stitch across.',
			'Repeat Row 2 until the piece measures 20 inches.',
			'Fold the piece in half and sew the sides together, leaving an opening for the pillow insert.',
			'Insert the pillow and sew up the remaining opening.',
			'Finish off and weave in ends.'
		],
		size: '20 x 20 inches',
		rating: 4.7
	}
];

export default crochetPatterns;
