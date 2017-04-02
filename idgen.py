def bitterator(bitdepth):

	bitcount = bitdepth # defines bits that we're working with

	base = "" # creates the 0 id of length bitcount
	for _ in range(bitcount):
		base = base + "0"

	def plus_one(bitstring):
		bitlist = []
		for bit in bitstring:	# converts bitstring to list for ease of workflow
			bitlist.append(bit)

		marker = len(bitlist) - 1
		while marker >= 0:
			if bitlist[marker] == "1":
				bitlist[marker] = "0"
				marker -= 1
			else:
				bitlist[marker] = "1"
				break

		outstring = ""
		for index in range(len(bitlist)):
			outstring += bitlist[index]

		return outstring

	workstring = base
	idlist = []
	for marker in range(2**bitcount):
		idlist.append(workstring)
		workstring = plus_one(workstring)

	return idlist
